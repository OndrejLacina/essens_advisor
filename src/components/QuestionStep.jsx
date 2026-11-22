export default function QuestionStep({
  otazka,
  vybranaOdpoved,
  vybratOdpoved,
  dalsiBtn,
  jePosledniOtazka,
}) {
  return (
    <div>
      <h2>Otázka</h2>
      <p>{otazka.question}</p>

      <ul>
        {otazka.options.map((option) => {
          return (
            <li key={option}>
              <label>
                <input
                  type="radio"
                  name={otazka.id}
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
      <button type="button" onClick={dalsiBtn} disabled={!vybranaOdpoved}>
        {jePosledniOtazka ? "Vyhodnotit dotazník" : "Další"}
      </button>

      {/* Pokud ještě není vybraná odpověď, ukáže nápovědu */}
      {!vybranaOdpoved && (
        <p role="status">Pro pokračování vyberte jednu možnost</p>
      )}
    </div>
  );
}
