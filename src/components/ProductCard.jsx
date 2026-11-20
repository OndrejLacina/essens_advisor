// řeší jak vypdá jeden produkt
export default function ProductCard({ perfume }) {
  return (
    <li>
      <h4>{perfume.name}</h4>
      <p>{perfume.description} </p>
      <p>{perfume.price} Kč </p>
      <img src={perfume.image} alt={perfume.name} />
    </li>
  );
}
