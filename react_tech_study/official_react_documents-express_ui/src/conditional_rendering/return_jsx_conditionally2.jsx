function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name} + "✅"</del> : name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <Item name="Space suit" isPacked={true} />
      <Item name="Space suit" isPacked={true} />
      <Item name="Space suit" isPacked={true} />
      <Item name="Space suit" isPacked={false} />
    </section>
  );
}
