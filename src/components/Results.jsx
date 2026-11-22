// řeší, které produkty se doporučí
import perfumes from "../data/perfumes.json";
import ProductCard from "./ProductCard";
import QUESTIONS from "../data/QUESTIONS";

export default function Results({ answers }) {
  // tvrdý filter na gender
  const genderFilteredPerfumes = perfumes.filter(
    (perfume) => perfume.gender === answers.gender,
  );

  // BODOVÁNÍ - SCORING
  const scoredPerfumes = genderFilteredPerfumes.map((perfume) => {
    let score = 0; // nové skóre pro každý parfém

    if (perfume.scent === answers.scent) score += 1;
    if (perfume.occasion.includes(answers.occasion)) score += 1;
    if (perfume.intensity === answers.intensity) score += 1;

    return { ...perfume, score };
  });

  // Filtrování 3-2b + 1b záložní
  const strongMatches = scoredPerfumes
    .filter((perfume) => perfume.score >= 2) // filtruje silné shody 3 or 2body
    .sort((a, b) => b.score - a.score); // sort od nejvyššího

  const recommendedPerfumes = // alespoň 1 silná shoda? then max 3 nej (když bude víc produktů, bude lepší)
    strongMatches.length > 0 // počet parfémů v poli > 0 (= alespoň 1)
      ? strongMatches.slice(0, 3)
      : // jinak parfem s 1 shodou a použijeme jako záložní doporučení
        scoredPerfumes.filter((perfume) => perfume.score === 1).slice(0, 2);

  return (
    <div>
      <h3>Váš výběr</h3>
      <ul>
        {QUESTIONS.map((question) => {
          return <li key={question.id}>{answers[question.id]}</li>;
        })}
      </ul>

      <h3>Výsledky</h3>
      <ul>
        {recommendedPerfumes.map((perfume) => (
          <ProductCard key={perfume.name} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
}
