export default function QuestionStep({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
}) {
  return (
    <div>
      <h2>Otázka</h2>
      <p>{question.question}</p>

      <ul>
        {question.options.map((option) => {
          return (
            <li key={option}>
              <label>
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
      <button type="button" onClick={onNextQuestion} disabled={!selectedAnswer}>
        {isLastQuestion ? "Vyhodnotit dotazník" : "Další"}
      </button>

      {/* Pokud ještě není vybraná odpověď, ukáže nápovědu */}
      {!selectedAnswer && (
        <p role="status">Pro pokračování vyberte jednu možnost</p>
      )}
    </div>
  );
}
