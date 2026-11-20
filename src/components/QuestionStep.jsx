export default function QuestionStep({
  questionProp,
  vybranaOdpoved,
  vybratOdpoved,
  dalsiProp,
  jePosledniOtazka,
}) {
  return (
    <div>
      <h2>Otázka</h2>
      <p>{questionProp.question}</p>

      <ul>
        {questionProp.options.map((option) => {
          return (
            <li key={option}>
              <label>
                <input
                  type="radio"
                  name={questionProp.id}
                  value={option}
                  checked={vybranaOdpoved === option}
                  onChange={() => {
                    vybratOdpoved(option);
                  }}
                />
                {option}
              </label>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={dalsiProp} disabled={!vybranaOdpoved}>
        {jePosledniOtazka ? "Vyhodnotit dotazník" : "Další"}
      </button>
    </div>
  );
}
