export default function WelcomeScreen({ onStartQuestionnaire }) {
  return (
    <div className="flex w-full flex-col items-center px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-blue-900 tracking-tight sm:text-4xl">
        ESSENS Perfume Advisor
      </h1>

      <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
        Vítejte u krátkého průvodce, který vám pomůže s výběrem vhodného
        parfému!
      </p>

      <button
        onClick={onStartQuestionnaire}
        className="mt-8 rounded-full bg-slate-800 px-8 py-3 text-base font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      >
        Začít výběr
      </button>
    </div>
  );
}
