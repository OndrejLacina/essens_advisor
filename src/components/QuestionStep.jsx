export default function QuestionStep({ questionProp }) {
  return (
    <div>
      <h2>Otázka</h2>
      <p>{questionProp.question}</p>
      <ul>
        {questionProp.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ul>
    </div>
  );
}
