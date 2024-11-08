export default function Avatar({ person, size }) {
  return <img src={person.url} alt={person.name} width={size} />;
}
