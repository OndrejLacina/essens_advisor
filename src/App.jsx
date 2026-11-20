import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QUESTIONS from "./data/QUESTIONS";
import QuestionStep from "./components/QuestionStep";

export default function App() {
  const [dotaznik, setDotaznik] = useState(false);
  const spustitDotaznik = () => {
    console.log("Kliknuto a tímto se spouští dotazník");
    setDotaznik(true);
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = QUESTIONS[questionIndex];

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {dotaznik ? (
        <p>První otázka</p>
      ) : (
        <WelcomeScreen onStartDotazniku={spustitDotaznik} />
      )}
      <QuestionStep questionProp={currentQuestion} />
    </main>
  );
}
