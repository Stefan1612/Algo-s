// -----------------------------------
// Low level version of set
// -----------------------------------

class ourSet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    /* console.log(this.collection.indexOf(element) !== -1); */
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    console.log(this.collection);
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      console.log(`${element} added to ${this.collection.length - 1}`);
      return true;
    }
    console.log("Element already inside collection");
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      console.log(`Removed ${this.collection[index]} from index: ${index}`);
      // splice modifies original array
      this.collection.splice(index, 1);
      return true;
    }
    console.log(`Element not inside collection`);
    return false;
  }

  size() {
    console.log(this.collection.length);
    return this.collection.length;
  }

  // this method will return the union of two sets (combines two sets and leaves out duplicates)
  union(otherSet) {
    let unionSet = new ourSet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    console.log(`UnionSet equals: ${unionSet.values()}`);
    return unionSet;
  }

  // returns duplicates of two sets
  intersection(otherSet) {
    let intersectionSet = new ourSet();
    let firstSet = this.values();

    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    console.log(intersectionSet.values());
    return intersectionSet;
  }

  // difference returns the difference of two sets as a new set
  difference(otherSet) {
    // error, you need to check which set is the longer one before looping through them
    let differenceSet = new ourSet();
    let mySet = this.values();

    if (otherSet.size() >= this.size()) {
      let set = otherSet.values();
      set.forEach((e) => {
        if (!this.has(e)) {
          differenceSet.add(e);
        }
      });
      console.log(differenceSet.values());
      return differenceSet;
    }

    mySet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    console.log(differenceSet.values());
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set
  subset(otherSet) {
    let firstSet = this.values();

    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

const set = new ourSet();

set.add("a");
set.add("b");
set.add("c");
set.add("d");
set.add("d");

set.values();

set.has("b");
set.has("e");

set.remove("e");
set.remove("b");

set.values();

// creating second set to union two sets

const secondSet = new ourSet();
secondSet.add("a");
secondSet.add("b");
secondSet.add("c");
secondSet.add("e");

set.union(secondSet);
set.values();

// duplicates of two sets
set.intersection(secondSet);

// difference of two sets
set.difference(secondSet);

console.log(set.subset(secondSet));

/// Default javascript set()

const inbuiltSet = new Set();

// All available methods
console.log(inbuiltSet.size);
console.log(inbuiltSet.add("a"));
console.log(inbuiltSet.add("a"));
console.log(inbuiltSet.add("b"));
console.log(inbuiltSet.clear());
console.log(inbuiltSet.delete());
console.log(inbuiltSet.has("a"));
// these two are aliases
console.log(inbuiltSet.values());
console.log(inbuiltSet.keys());

console.log(inbuiltSet.entries());
console.log(
  inbuiltSet.forEach((value) => {
    console.log(value);
  })
);

// -----------------------------------
// High level version of set
// -----------------------------------

