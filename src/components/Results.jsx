// řeší, které produkty se doporučí
import perfumes from "../data/perfumes.json";
import ProductCard from "./ProductCard";
import QUESTIONS from "../data/QUESTIONS";

export default function Results({ odpovedi }) {
  // tvrdý filter na gender
  const parfemyPodleGenderu = perfumes.filter(
    (perfume) => perfume.gender === odpovedi.gender,
  );

  // BODOVÁNÍ - SCORING
  const ohodnoceneParfemy = parfemyPodleGenderu.map((perfume) => {
    let score = 0; // nové skóre pro každý parfém

    if (perfume.scent === odpovedi.scent) score += 1;
    if (perfume.occasion.includes(odpovedi.occasion)) score += 1;
    if (perfume.intensity === odpovedi.intensity) score += 1;

    return { ...perfume, score };
  });

  // Filtrování 3-2b + 1b záložní
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
      <h3>Váš výběr</h3>
      <ul>
        {QUESTIONS.map((answer) => {
          return <li key={answer.id}>{odpovedi[answer.id]}</li>;
        })}
      </ul>

      <h3>Výsledky</h3>
      <ul>
        {doporuceneParfemy.map((perfume) => (
          <ProductCard key={perfume.name} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
}
