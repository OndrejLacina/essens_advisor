export default function QuestionStep({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
}) {
  return (
    <div className="w-full max-w-xl border border-slate-200 bg-white p-5 sm:p-8">
      <p className="text-sm font-medium tracking-wide text-slate-500">Otázka</p>

      <h2 className="mt-2 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
        {question.question}
      </h2>

      <ul className="mt-6 list-none space-y-3 p-0">
        {question.options.map((option) => {
          return (
            <li key={option}>
              <label className="flex cursor-pointer items-center gap-3 border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => {
                    onSelectAnswer(option);
                  }}
                />
                {option}
              </label>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={onNextQuestion}
        disabled={!selectedAnswer}
        className="mt-6 w-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
      >
        {isLastQuestion ? "Vyhodnotit dotazník" : "Další"}
      </button>

      {/* Pokud ještě není vybraná odpověď, ukáže nápovědu */}
      {!selectedAnswer && (
        <p role="status" className="mt-3 text-sm text-slate-500">
          Pro pokračování vyberte jednu možnost
        </p>
      )}
    </div>
  );
}
