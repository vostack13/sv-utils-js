const { LinkedList } = require("../src/LinkedList");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.prepand(0);
list.prepand(-1);
console.log(list.toArray());
console.log(list.head.value);
console.log(list.getFirst());
console.log(list.getLast());
list.removeFirst();
list.removeFirst();
list.removeFirst();
console.log(list.toArray());
console.log(list.head.value);
console.log(list.getFirst());
console.log(list.getLast());
