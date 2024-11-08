const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function List() {
  const listItem = people.map((person) => <li>{person.name}</li>);
  const chemists = people.filter((person) => person.profession === "chemist");
  const chemistsItem = chemists.map((person) => <li>{person.name}</li>);
  return (
    <div>
      <ul>{listItem}</ul>
      <ol>{chemistsItem}</ol>
    </div>
  );
}
