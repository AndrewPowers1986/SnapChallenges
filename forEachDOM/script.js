// Using the foreach loop display this array of text to the DOM.
//
//     ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
//
// Hint: Each array element must appear in it's own html tag in the browser. Extra Credit: use map or reduce.

const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

let target = document.getElementById('target');

console.log(target);

names.forEach(name => target.innerHTML += '<p>' + name + '</p>');

let p = document.createElement('p');
p.innerText = 'this is a p tag';
console.log(p);
target.appendChild(p);