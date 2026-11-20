// řeší, které produkty se doporučí
import perfumes from "../data/perfumes.json";
import ProductCard from "./ProductCard";

export default function Results({ odpovediProp }) {
  const ohodnoceneParfemy = perfumes.map((perfume) => {
    let score = 0; // nové skóre pro každý parfém

    if (perfume.scent === odpovediProp.scent) score += 1;
    if (perfume.occasion.includes(odpovediProp.occasion)) score += 1;
    if (perfume.intensity === odpovediProp.intensity) score += 1;

    return { ...perfume, score };
  });

  const doporuceneParfemy = ohodnoceneParfemy
    .filter((perfume) => perfume.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div>
      <h3>Výsledky</h3>
      <pre>{JSON.stringify(odpovediProp, null, 2)}</pre>
      <ul>
        {doporuceneParfemy.map((perfume) => (
          <ProductCard key={perfume.name} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
}
