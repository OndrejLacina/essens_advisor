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

  const silneShody = ohodnoceneParfemy
    .filter((perfume) => perfume.score >= 2) // filtruje silné shody 3 or 2body
    .sort((a, b) => b.score - a.score); // sort od nejvyššího

  const doporuceneParfemy = // alespoň 1 silná shoda? then max 3 nej (když bude víc produktů, bude lepší)
    silneShody.length > 0 // počet parfémů v poli > 0 (= alespoň 1)
      ? silneShody.slice(0, 3)
      : // jinak parfem s 1 shodou a použijeme jako záložní doporučení
        ohodnoceneParfemy.filter((perfume) => perfume.score === 1).slice(0, 2);

  return (
    <div>
      <h3>Výsledky</h3>
      <pre>{JSON.stringify(odpovediProp, null, 2)}</pre>
      {/* pracovní */}
      <ul>
        {doporuceneParfemy.map((perfume) => (
          <ProductCard key={perfume.name} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
}
