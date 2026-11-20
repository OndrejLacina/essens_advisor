import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QUESTIONS from "./data/QUESTIONS";
import QuestionStep from "./components/QuestionStep";
import Results from "./components/Results";

export default function App() {
  // useState
  const [dotaznik, setDotaznik] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [odpovedi, setOdpovedi] = useState({});
  const [zobrazitVysledky, setZobrazitVysledky] = useState(false);

  // Funkce na spuštění dotazníku
  const spustitDotaznik = () => {
    console.log("Kliknuto a tímto se spouští dotazník");
    setDotaznik(true);
  };

  // Funkce a useState na jedntlivé otázky a odpovědi
  // currentQuestion
  const currentQuestion = QUESTIONS[questionIndex];

  // odpovedi
  const vybranaOdpoved = odpovedi[currentQuestion.id];

  const ulozitOdpoved = (option) => {
    setOdpovedi((predchoziOdpovedi) => ({
      ...predchoziOdpovedi,
      [currentQuestion.id]: option,
    }));
  };

  // vyhodnocení if poslední otázka + definice "jePosledniOtazka"
  const jePosledniOtazka = questionIndex === QUESTIONS.length - 1;

  const posunoutDalsiOtazku = () => {
    if (jePosledniOtazka) {
      setZobrazitVysledky(true);
    } else {
      setQuestionIndex((index) => index + 1);
    }
  };

  // if poslední, zobraz Výsledky - useState zobrazitVysledky

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {!dotaznik ? (
        <WelcomeScreen onStartDotazniku={spustitDotaznik} />
      ) : zobrazitVysledky ? (
        <Results />
      ) : (
        <QuestionStep
          questionProp={currentQuestion}
          vybranaOdpoved={vybranaOdpoved}
          vybratOdpoved={ulozitOdpoved}
          dalsiProp={posunoutDalsiOtazku}
          jePosledniOtazka={jePosledniOtazka}
        />
      )}
    </main>
  );
}
