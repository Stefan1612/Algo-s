// -----------------------------------
// High level version of stack using arrays
// -----------------------------------

class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  push(value) {
    this.storage[this.count] = value;
    console.log(`${value} added to ${this.count}`);
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    console.log(`${this.storage[this.count - 1]} removed from ${this.count}`);
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    console.log(this.count);
    return this.count;
  }

  peek() {
    console.log(this.storage[this.count - 1]);
    return this.storage[this.count - 1];
  }

  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.peek();
stack.size();

stack.pop();
stack.size();

stack.push(400);
stack.isEmpty();

stack.peek();
stack.pop();

// -----------------------------------
// High level version of stack using arrays
// -----------------------------------
