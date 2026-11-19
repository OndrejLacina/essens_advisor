import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const spustitDotaznik = () => {
    console.log("Kliknuto a tímto se spouští dotazník");
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <WelcomeScreen onStartDotazniku={spustitDotaznik} />
    </main>
  );
}
