/* Implement Linked List Operations
In this lab, you will implement additional operations for a linked list data structure, building on the basic functionality of adding and removing nodes.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a contains function that accepts a linked list and an element. It should return true if the specified element exists in the linked list, and false otherwise.
You should have a getAt function that accepts a linked list and an index. It should return the element at the given index in the linked list. If the index is out of bounds, it should return undefined.
You should have a insertAt function that accepts a linked list, an index, and an element. It should insert the given element at the specified position in the linked list. If the index is out of bounds, it should not modify the list.
You should have a removeAt function that accepts a linked list and an index. It should remove the node at the given index in the linked list. If the index is out of bounds, it should not modify the list.
You should have a clear function that accepts a linked list. It should remove all elements from the linked list, effectively resetting it to an empty state.
Note: Some later tests rely on earlier methods. For example, if getAt is not implemented correctly, tests for functions like insertAt and removeAt may fail even when those functions are close to correct.*/

function initList() {
  return {
    head: null,
    length: 0,
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;
  while (current !== null) {
    if (current.element === element) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function getAt(list, index) {
  if (index < 0 || index >= list.length) {
    return undefined;
  }
  let idx = 0;
  let current = list.head;
  while (idx < index) {
    current = current.next;
    idx++;
  }
  return current.element;
}

function insertAt(list, index, element) {
  if (index < 0 || index > list.length) {
    return;
  }
  const newNode = { element, next: null };

  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode;
  } else {
    let current = list.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = newNode;
    newNode.next = current;
  }
  list.length++;
}

function removeAt(list, index) {
  if (index < 0 || index >= list.length) {
    return;
  }
  if (index === 0) {
    list.head = list.head.next;
  } else {
    let current = list.head;
    let prev = null;
    let count = 0;
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
  }
  list.length--;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}
