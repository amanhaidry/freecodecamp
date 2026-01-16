/* User Stories (Instructions)

When the form is submitted, you should ensure that:
#full-name is not empty.
#email is a valid email address format.
#order-no is a sequence of ten numbers starting with 2024.
#product-code follows the pattern XX##-X###-XX#, where X represents either a lowercase letter or an uppercase letter and # represents a number.
#quantity is a positive integer.
at least one checkbox from #complaints-group is checked.
#complaint-description contains at least twenty characters if the Other checkbox is checked.
a radio button from #solutions-group is selected.
#solution-description contains at least twenty characters if the Other radio button is selected.
You should have a function named validateForm that returns an object containing the following keys: full-name, email, order-no, product-code, quantity, complaints-group, complaint-description, solutions-group, and solution-description. The value of each key should be true if the corresponding form field is correctly filled and false otherwise.
You should have a function named isValid that takes the object returned by validateForm as argument and returns true if every form field is correctly filled and false otherwise.
If a change event is triggered on a form field and it has a valid value, you should set its border color to green. In case of checkbox and radio button groups, you should set the border color of the parent fieldset.
If a change event is triggered on a form field and it has an invalid value, you should set its border color to red. In case of checkbox and radio button groups, you should set the border color of the parent fieldset.
When you try to submit the form you should call isValid to validate the form.
When you try to submit the form, if the form has any invalid field, each invalid field should be highlighted by setting the border color of each invalid input, textarea or fieldset (in case of checkbox and radio button groups) to red.
*/

const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const form = document.getElementById("form");
const messageBox = document.getElementById("message-box");

const complaintsCheckboxes = document.querySelectorAll(
  'input[name="complaint"]'
);
const solutionsRadios = document.querySelectorAll('input[name="solutions"]');

// Validation functions
function validateFullName(value) {
  return value.trim().length > 0;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateOrderNo(orderNo) {
  const orderNoRegex = /^2024\d{6}$/;
  return orderNoRegex.test(orderNo);
}

function validateProductCode(productCode) {
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  return productCodeRegex.test(productCode);
}

function validateQuantity(quantity) {
  return Number.isInteger(Number(quantity)) && Number(quantity) > 0;
}

function validateComplaintsGroup() {
  return Array.from(complaintsCheckboxes).some((checkbox) => checkbox.checked);
}

function validateComplaintDescription(description, includeValidation) {
  if (!includeValidation) {
    return true;
  }
  return description.length >= 20;
}

function validateSolutionsGroup() {
  return Array.from(solutionsRadios).some((radio) => radio.checked);
}

function validateSolutionDescription(description, includeValidation) {
  if (!includeValidation) {
    return true;
  }
  return description.length >= 20;
}

// Check if "Other" checkbox is checked
function isOtherComplaintChecked() {
  const otherCheckbox = document.getElementById("other-complaint");
  return otherCheckbox.checked;
}

// Check if "Other" radio button is selected
function isOtherSolutionSelected() {
  const otherRadio = document.getElementById("other-solution");
  return otherRadio.checked;
}

function validateForm() {
  const validation = {
    "full-name": validateFullName(fullNameInput.value),
    email: validateEmail(emailInput.value),
    "order-no": validateOrderNo(orderNoInput.value),
    "product-code": validateProductCode(productCodeInput.value),
    quantity: validateQuantity(quantityInput.value),
    "complaints-group": validateComplaintsGroup(),
    "complaint-description": validateComplaintDescription(
      complaintDescription.value,
      isOtherComplaintChecked()
    ),
    "solutions-group": validateSolutionsGroup(),
    "solution-description": validateSolutionDescription(
      solutionDescription.value,
      isOtherSolutionSelected()
    ),
  };
  return validation;
}

function isValid(validationObject) {
  return Object.values(validationObject).every((value) => value === true);
}

// Update border color based on validation
function updateBorderColor(element, isFieldValid) {
  if (isFieldValid) {
    element.style.borderColor = "green";
  } else {
    element.style.borderColor = "red";
  }
}

// Handle change events for individual form fields
fullNameInput.addEventListener("change", () => {
  const isFieldValid = validateFullName(fullNameInput.value);
  updateBorderColor(fullNameInput, isFieldValid);
});

emailInput.addEventListener("change", () => {
  const isFieldValid = validateEmail(emailInput.value);
  updateBorderColor(emailInput, isFieldValid);
});

orderNoInput.addEventListener("change", () => {
  const isFieldValid = validateOrderNo(orderNoInput.value);
  updateBorderColor(orderNoInput, isFieldValid);
});

productCodeInput.addEventListener("change", () => {
  const isFieldValid = validateProductCode(productCodeInput.value);
  updateBorderColor(productCodeInput, isFieldValid);
});

quantityInput.addEventListener("change", () => {
  const isFieldValid = validateQuantity(quantityInput.value);
  updateBorderColor(quantityInput, isFieldValid);
});

// Handle change events for complaint checkboxes
complaintsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const isGroupValid = validateComplaintsGroup();
    updateBorderColor(complaintsGroup, isGroupValid);

    // Also validate complaint description if "Other" is checked
    if (isOtherComplaintChecked()) {
      const isDescriptionValid = validateComplaintDescription(
        complaintDescription.value,
        true
      );
      updateBorderColor(
        document.getElementById("complaint-description-container"),
        isDescriptionValid
      );
    } else {
      // Reset border if "Other" is unchecked
      document.getElementById(
        "complaint-description-container"
      ).style.borderColor = "";
    }
  });
});

complaintDescription.addEventListener("change", () => {
  if (isOtherComplaintChecked()) {
    const isFieldValid = validateComplaintDescription(
      complaintDescription.value,
      true
    );
    updateBorderColor(complaintDescription, isFieldValid);
  }
});

// Handle change events for solution radios
solutionsRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const isGroupValid = validateSolutionsGroup();
    updateBorderColor(solutionsGroup, isGroupValid);

    // Also validate solution description if "Other" is selected
    if (isOtherSolutionSelected()) {
      const isDescriptionValid = validateSolutionDescription(
        solutionDescription.value,
        true
      );
      updateBorderColor(
        document.getElementById("solution-description-container"),
        isDescriptionValid
      );
    } else {
      // Reset border if "Other" is not selected
      document.getElementById(
        "solution-description-container"
      ).style.borderColor = "";
    }
  });
});

solutionDescription.addEventListener("change", () => {
  if (isOtherSolutionSelected()) {
    const isFieldValid = validateSolutionDescription(
      solutionDescription.value,
      true
    );
    updateBorderColor(solutionDescription, isFieldValid);
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validation = validateForm();

  if (isValid(validation)) {
    messageBox.textContent = "Form submitted successfully!";
    messageBox.style.color = "green";
    // Reset form after successful submission
    setTimeout(() => {
      form.reset();
      messageBox.textContent = "";
      // Clear all border colors
      document.querySelectorAll("input, textarea, fieldset").forEach((el) => {
        el.style.borderColor = "";
      });
    }, 2000);
  } else {
    messageBox.textContent = "Please correct the errors in the form.";
    messageBox.style.color = "red";

    // Highlight invalid fields
    if (!validation["full-name"]) {
      updateBorderColor(fullNameInput, false);
    } else {
      updateBorderColor(fullNameInput, true);
    }

    if (!validation["email"]) {
      updateBorderColor(emailInput, false);
    } else {
      updateBorderColor(emailInput, true);
    }

    if (!validation["order-no"]) {
      updateBorderColor(orderNoInput, false);
    } else {
      updateBorderColor(orderNoInput, true);
    }

    if (!validation["product-code"]) {
      updateBorderColor(productCodeInput, false);
    } else {
      updateBorderColor(productCodeInput, true);
    }

    if (!validation["quantity"]) {
      updateBorderColor(quantityInput, false);
    } else {
      updateBorderColor(quantityInput, true);
    }

    if (!validation["complaints-group"]) {
      updateBorderColor(complaintsGroup, false);
    } else {
      updateBorderColor(complaintsGroup, true);
    }

    if (!validation["complaint-description"]) {
      updateBorderColor(
        document.getElementById("complaint-description-container"),
        false
      );
    } else if (isOtherComplaintChecked()) {
      updateBorderColor(
        document.getElementById("complaint-description-container"),
        true
      );
    }

    if (!validation["solutions-group"]) {
      updateBorderColor(solutionsGroup, false);
    } else {
      updateBorderColor(solutionsGroup, true);
    }

    if (!validation["solution-description"]) {
      updateBorderColor(
        document.getElementById("solution-description-container"),
        false
      );
    } else if (isOtherSolutionSelected()) {
      updateBorderColor(
        document.getElementById("solution-description-container"),
        true
      );
    }
  }
});
