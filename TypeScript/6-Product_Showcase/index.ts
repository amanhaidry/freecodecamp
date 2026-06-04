//Item Interface
interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

//Book Interface
interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

//Electronics Interface
interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

//Clothing Interface
interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

// Union Type
type Product = Book | Electronics | Clothing;

//Generic Collection Class
class Collection<T> {
  items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}

//renderProduct Function with Type Narrowing
function renderProduct(product: Product): string {
  let additionalInfo = "";

  switch (product.type) {
    case "book":
      additionalInfo = `Book: ${product.title} by ${product.author}`;
      break;
    case "electronics":
      additionalInfo = `Electronics: ${product.item} - ${product.model}`;
      if (product.warranty !== undefined) {
        additionalInfo += ` - Warranty: ${product.warranty} year(s)`;
      }
      break;
    case "clothing":
      additionalInfo = `Clothing: ${product.item} by ${product.brand}`;
      if (product.size !== undefined) {
        additionalInfo += ` - Size ${product.size}`;
      }
      break;
    default:
      throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
  }

  return `
    <div class="item" id="${product.id}">
      <p class="price">${product.price}</p>
      <p>${additionalInfo}</p>
    </div>
  `;
}

//Collection<Product> instance with at least one of each type
const products = new Collection<Product>([
  {
    type: "book",
    id: "b1",
    price: 14.99,
    title: "The TypeScript Handbook",
    author: "Anders Hejlsberg",
  },
  {
    type: "electronics",
    id: "e1",
    price: 999.99,
    item: "Smartphone",
    model: "X-200",
    warranty: 2,
  },
  {
    type: "clothing",
    id: "c1",
    price: 49.99,
    item: "Jacket",
    brand: "Urban Fit",
    size: "M",
  },
]);

//showProducts Function
function showProducts(filterType?: "book" | "electronics" | "clothing"): void {
  const outputElement = document.getElementById("output");
  if (!outputElement) return;

  const displayList = filterType
    ? products.filter((p) => p.type === filterType)
    : products.getAll();

  const htmlString = displayList
    .map((product) => renderProduct(product))
    .join("");
  outputElement.innerHTML = htmlString;
}

//Event Listeners and Initial Load
document.addEventListener("DOMContentLoaded", () => {
  // Show all products by default
  showProducts();

  // Setup button event listeners
  document
    .getElementById("all")
    ?.addEventListener("click", () => showProducts());
  document
    .getElementById("books")
    ?.addEventListener("click", () => showProducts("book"));
  document
    .getElementById("electronics")
    ?.addEventListener("click", () => showProducts("electronics"));
  document
    .getElementById("clothing")
    ?.addEventListener("click", () => showProducts("clothing"));
});
