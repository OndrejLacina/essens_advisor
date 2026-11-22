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
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h3 className="text-sm font-semibold tracking-wide text-slate-600">
          Váš výběr
        </h3>
        <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
          {QUESTIONS.map((question) => {
            return (
              <li
                key={question.id}
                className="border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
              >
                {answers[question.id]}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Výsledky
        </h3>
        <ul className="mt-5 flex list-none flex-col gap-4 p-0">
          {recommendedPerfumes.map((perfume) => (
            <ProductCard key={perfume.name} perfume={perfume} />
          ))}
        </ul>
      </section>
    </div>
  );
}
