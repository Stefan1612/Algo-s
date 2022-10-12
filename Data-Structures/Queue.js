// -----------------------------------
// Queue with array (instead of linked list)
// -----------------------------------

class Queue {
  constructor() {
    this.line = [];
  }

  print() {
    console.log(this.line);
    return this.line;
  }

  enqueue(value) {
    console.log(`Added ${value} to ${this.line.length}`);
    return this.line.push(value);
  }

  dequeue() {
    console.log(`Removed ${this.line[0]} from 0`);
    return this.line.shift();
  }

  front() {
    console.log(this.line[0]);
    return this.line[0];
  }

  size() {
    console.log(this.line.length);
    return this.line.length;
  }

  isEmpty() {
    console.log(this.line.length === 0);
    return this.line.length === 0;
  }
}

const ourQueue = new Queue();

ourQueue.isEmpty();

ourQueue.enqueue("a");
ourQueue.enqueue("b");
ourQueue.enqueue("c");
ourQueue.size();

ourQueue.print();
ourQueue.dequeue();
ourQueue.front();
ourQueue.print();
ourQueue.isEmpty();
ourQueue.size();

// -----------------------------------
// Priority Queue with array (instead of linked list)
// -----------------------------------

// Everything beside the enqueue function stays the same

class PrioQueue {
  constructor() {
    this.line = [];
  }

  print() {
    console.log(this.line);
    return this.line;
  }

  // different
  enqueue(value) {
    if (this.isEmpty()) {
      this.line.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.line.length; i++) {
        if (value[1] < this.line[i][1]) {
          this.line.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        this.line.push(value);
      }
    }

    console.log(`Added ${value} to ${this.line.length}`);
    return this.line.push(value);
  }

  dequeue() {
    console.log(`Removed ${this.line[0]} from 0`);
    return this.line.shift();
  }

  front() {
    console.log(this.line[0]);
    return this.line[0];
  }

  size() {
    console.log(this.line.length);
    return this.line.length;
  }

  isEmpty() {
    console.log(this.line.length === 0);
    return this.line.length === 0;
  }
}

const priQueue = new PrioQueue();

priQueue.enqueue(["Stefan L", 2]);
priQueue.enqueue(["Bob ree", 3]);
priQueue.enqueue(["Sebastian A", 1]);
priQueue.enqueue(["Second", 2]);
priQueue.print();
priQueue.dequeue();
priQueue.front();
priQueue.print();
