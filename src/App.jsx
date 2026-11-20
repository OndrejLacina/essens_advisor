import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QUESTIONS from "./data/QUESTIONS";
import QuestionStep from "./components/QuestionStep";

export default function App() {
  // Funkce a useState na spuštění dotazníku
  const [dotaznik, setDotaznik] = useState(false);
  const spustitDotaznik = () => {
    console.log("Kliknuto a tímto se spouští dotazník");
    setDotaznik(true);
  };

  // Funkce a useState na jedntlivé otázky a odpovědi
  const [questionIndex, setQuestionIndex] = useState(0);
  const [odpovedi, setOdpovedi] = useState({});
  // questionIndex
  const currentQuestion = QUESTIONS[questionIndex];

  // odpovedi
  const vybranaOdpoved = odpovedi[currentQuestion.id];

  const ulozitOdpoved = (option) => {
    setOdpovedi((predchoziOdpovedi) => ({
      ...predchoziOdpovedi,
      [currentQuestion.id]: option,
    }));
  };

  const posunoutDalsiOtazku = () => {
    setQuestionIndex((index) => index + 1);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {dotaznik ? (
        <QuestionStep
          questionProp={currentQuestion}
          vybranaOdpoved={vybranaOdpoved}
          vybratOdpoved={ulozitOdpoved}
          dalsiProp={posunoutDalsiOtazku}
        />
      ) : (
        <WelcomeScreen onStartDotazniku={spustitDotaznik} />
      )}
    </main>
  );
}
