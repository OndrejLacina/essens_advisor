import React from "react";
import { useState } from "react";

export default function WelcomeScreen({ startDotazniku }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800">
        Essens Perfume Advisor
      </h1>
      <p>
        Vítejte u krátkého průvodce, který vám pomůže s výběrem vhodného
        parfému!
      </p>
      <button onClick={startDotazniku}>Začít výběr</button>
    </div>
  );
}
