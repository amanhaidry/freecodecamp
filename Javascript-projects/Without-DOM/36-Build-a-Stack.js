function initStack() {
  return { collection: [] };
}

function push(stack, element) {
  stack.collection.push(element);
}

function pop(stack) {
  return stack.collection.pop();
}

function peek(stack) {
  let lastIdx = stack.collection.length - 1;
  return stack.collection[lastIdx];
}

function isEmpty(stack) {
  return stack.collection.length === 0;
}

function clear(stack) {
  stack.collection = [];
}
