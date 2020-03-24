const obj = {
  name: 'Alex',
  age: 22,
  job: 'Dont have one yet'
}

const entries = [
  ['name', 'Alex'],
  ['age', 22],
  ['job', 'Dont have one yet']
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries)

console.log(map.get('job'))