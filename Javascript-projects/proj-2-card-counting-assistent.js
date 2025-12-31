// Global variable
let count = 0;

function cardCounter(card) {
  // Increase count for 2–6
  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  }
  // No change for 7–9
  else if ([7, 8, 9].includes(card)) {
    count += 0;
  }
  // Decrease count for 10, J, Q, K, A
  else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count--;
  }

  // Decision: Bet if count > 0, else Hold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
