import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const [dotaznik, setDotaznik] = useState(false);

  const spustitDotaznik = () => {
    console.log("Kliknuto a tímto se spouští dotazník");
    setDotaznik(true);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {dotaznik ? (
        <p>První otázka</p>
      ) : (
        <WelcomeScreen onStartDotazniku={spustitDotaznik} />
      )}
    </main>
  );
}
