import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <WelcomeScreen startDotazniku={funkce} />
    </main>
  );
}
