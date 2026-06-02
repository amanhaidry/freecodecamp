// Category type
type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";

// Motorcycle interface
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  engine: string;
}

// fetchMotorcycles function
async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const response = await fetch(
    "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json",
  );
  const data = await response.json();
  return data.map((m: any) => ({
    ...m,
    created_at: new Date(m.created_at),
  })) as Motorcycle[];
}

// renderMotorcycleCard function
function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
    <div class="motorcycle-card">
      <img src="${motorcycle.image_url}" alt="${motorcycle.name}" class="motorcycle-card-image-container" />
      <div class="motorcycle-card-year-badge">${motorcycle.year}</div>
      <h2 class="motorcycle-card-title">${motorcycle.name}</h2>
      <div class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</div>
      <div class="motorcycle-card-category">${motorcycle.category}</div>
      <p class="motorcycle-card-description">${motorcycle.description}</p>
      <div class="motorcycle-card-price">$${motorcycle.price}</div>
      <div class="motorcycle-card-engine">${motorcycle.engine}</div>
    </div>
  `;
}

// MotorcycleGalleryApp class
class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  async renderMotorcycles(): Promise<void> {
    const grid = document.getElementById("motorcycle-grid");
    const resultsNumber = document.getElementById("results-number");
    const noResults = document.getElementById("no-results");
    const loadingContainer = document.getElementById("loading-container");

    if (loadingContainer) loadingContainer.style.display = "block";

    // Fetch data inside renderMotorcycles (important for tests)
    this.allMotorcycles = await fetchMotorcycles();

    if (loadingContainer) loadingContainer.style.display = "none";

    if (grid) {
      grid.innerHTML = this.allMotorcycles.map(renderMotorcycleCard).join("");
    }
    if (resultsNumber) {
      resultsNumber.textContent = this.allMotorcycles.length.toString();
    }
    if (noResults) {
      noResults.style.display =
        this.allMotorcycles.length === 0 ? "block" : "none";
    }

    // Optional filter setup
    const filterInput = document.getElementById(
      "name-filter-input",
    ) as HTMLInputElement;
    if (filterInput) {
      filterInput.addEventListener("input", (e) => {
        const value = (e.target as HTMLInputElement).value.toLowerCase();
        const filtered = this.allMotorcycles.filter(
          (m) =>
            m.name.toLowerCase().includes(value) ||
            m.manufacturer.toLowerCase().includes(value) ||
            m.category.toLowerCase().includes(value),
        );
        if (grid) grid.innerHTML = filtered.map(renderMotorcycleCard).join("");
        if (resultsNumber)
          resultsNumber.textContent = filtered.length.toString();
        if (noResults)
          noResults.style.display = filtered.length === 0 ? "block" : "none";
      });
    }
  }
}

// Instantiate and render
const app = new MotorcycleGalleryApp();
app.renderMotorcycles();
