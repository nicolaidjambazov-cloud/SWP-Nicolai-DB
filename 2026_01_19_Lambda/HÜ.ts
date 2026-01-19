type Person = {
  name: string;
  age: number;
  gender: "m" | "f";
};

const persons: Person[] = [
  { name: "Hermine", age: 14, gender: "f" },
  { name: "Harry", age: 15, gender: "m" },
  { name: "Ron", age: 15, gender: "m" },
  { name: "Ginny", age: 13, gender: "f" },
  { name: "Draco", age: 16, gender: "m" }
];


const sortedByAge: Person[] = [...persons].sort(
  (a, b) => a.age - b.age
);


const males: Person[] = sortedByAge.filter(
  person => person.gender === "m"
);

const females: Person[] = sortedByAge.filter(
  person => person.gender === "f"
);

console.log(sortedByAge);
console.log(males);
console.log(females);

