// -------------- HTML elements --------------

// main section elements
const mainSection = document.getElementById("main-section");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");

// form section elements
const formSection = document.getElementById("form-section");
const formCategoryName = formSection.querySelector(".category-name");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const closeFormBtn = document.getElementById("close-form-button");

// bookmark list section elements
const bookmarkListSection = document.getElementById("bookmark-list-section");
const listCategoryName = bookmarkListSection.querySelector(".category-name");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const dltBookmarkBtn = document.getElementById("delete-bookmark-button");

// ---------- functions ----------

// to get bookmarks from local storage
const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks)) {
      return [];
    }

    const isValid = bookmarks.every((bookmark) => {
      return (
        bookmark &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
      );
    });

    if (!isValid) {
      return [];
    }

    return bookmarks;
  } catch (e) {
    return [];
  }
};

// to set bookmarks in local storage
const setBookmarks = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

// to display or close the form section
const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

// to reset the form inputs and close the form section
const reset = () => {
  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
};

// to display or hide the bookmark list section
const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

// to capitalize first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// to refresh the category list
const refreshCategoryList = () => {
  const currCategory = categoryDropdown.value;
  listCategoryName.innerText = capitalizeFirstLetter(currCategory);
  categoryList.innerHTML = "";

  const bookmarks = getBookmarks();
  const currCatBookmarks = bookmarks.filter((bookmark) => {
    return bookmark.category == currCategory;
  });

  if (!currCatBookmarks.length) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = currCatBookmarks
      .map((bookmark) => {
        return `<div><input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark.category"><label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label></div>`;
      })
      .join("");
  }
};

// ---------- click events ----------

// to open the form section
addBookmarkBtn.addEventListener("click", () => {
  formCategoryName.innerText = capitalizeFirstLetter(categoryDropdown.value);
  displayOrCloseForm();
});

// to close the form section
closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

// to add a bookmark
addBookmarkBtnForm.addEventListener("click", () => {
  const newBookmark = {
    name: nameInput.value.trim(),
    category: categoryDropdown.value,
    url: urlInput.value.trim(),
  };
  const bookmarks = getBookmarks();
  bookmarks.push(newBookmark);
  setBookmarks(bookmarks);
  reset();
});

// to view bookmarks of a category
viewCategoryBtn.addEventListener("click", () => {
  refreshCategoryList();
  displayOrHideCategory();
});

// to close the bookmark list section
closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

// to delete a bookmark
dltBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector(`input[type="radio"]:checked`);

  if (!selectedRadio) {
    alert("Please select a bookmark to delete.");
    return;
  }

  const selectedName = selectedRadio.value;
  const currCategory = categoryDropdown.value;

  let bookmarks = getBookmarks();

  bookmarks = bookmarks.filter((bookmark) => {
    return !(
      bookmark.name == selectedName && bookmark.category == currCategory
    );
  });

  setBookmarks(bookmarks);
  refreshCategoryList();
});
