import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QUESTIONS from "./data/QUESTIONS";
import QuestionStep from "./components/QuestionStep";
import Results from "./components/Results";

export default function App() {
  // useState
  const [screen, setScreen] = useState("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // ukládá odpovědi z onChange z QuestionStep.jsx

  // Funkce na spuštění dotazníku
  const startQuestionnaire = () => {
    setScreen("questions");
  };

  // Začátek indexu - resp. první otázky
  const currentQuestion = QUESTIONS[questionIndex];

  // odpovedi
  const selectedAnswer = answers[currentQuestion.id];

  const saveAnswer = (option) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: option,
    }));
  };

  // vyhodnocení if poslední otázka + definice "isLastQuestion"
  const isLastQuestion = questionIndex === QUESTIONS.length - 1;

  const goToNextQuestion = () => {
    if (isLastQuestion) {
      setScreen("results");
    } else {
      setQuestionIndex((index) => index + 1);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {screen === "welcome" && (
        <WelcomeScreen onStartQuestionnaire={startQuestionnaire} />
      )}

      {screen === "questions" && (
        <QuestionStep
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={saveAnswer}
          onNextQuestion={goToNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      )}

      {screen === "results" && <Results answers={answers} />}
    </main>
  );
}
