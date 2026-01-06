function maskEmail(email) {
  // Finding the position of '@'
  const atIndex = email.indexOf("@");
  
  // Extracting local part and domain
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  if (local.length <= 2) {
    // If local part is only 2 chars, just returning as is
    return local + domain;
  }
  
  const masked = local[0] + "*".repeat(local.length - 2) + local[local.length - 1];
  
  return masked + domain;
}

// Example usage:
let email = "apple.pie@example.com";
console.log(maskEmail(email)); // a*******e@example.com

console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com
console.log(maskEmail("info@test.dev"));            // i**o@test.dev
console.log(maskEmail("user@domain.org"));          // u**r@domain.org