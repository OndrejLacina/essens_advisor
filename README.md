# ESSENS Perfume Advisor

Interaktivní frontendová aplikace, která doporučuje parfémy podle preferencí uživatele.

## Funkce

- Postupný výběr cílové skupiny, typu vůně, příležitosti a intenzity.
- Doporučení produktů podle shody s vybranými preferencemi.
- Lokální produktová data v `src/data/perfumes.json`.
- Responzivní rozhraní s fotografií, popisem a cenou doporučených produktů.
- Aplikace nepoužívá backend a neumožňuje nákup.

## Použité technologie & principy

- React, JS, TailwindCSS, Vite, GitHub
- Jednotlivé komponenty, čistá logika, validace dat, props, useState, podmíněné renderování, responzivní design, data lokálně, bez BE

## Aplikace & kód & orientace

- Celkově 4 komponenty, vše se pak vykresluje v App.jsx
- Otázky a odpovědi udržované mimo kód v samostatném datovém souboru QUESTIONS.js

## Spuštění

```bash
npm install
npm run dev
```

Kontrola kódu a produkční sestavení:

```bash
npm run lint
npm run build
```

### Organizační

- pro lepší čitelnost vytvořena kopie kódu bez TW - branch: "before-design"
- v main branch pokračování s TW designem
- kód obsahuje pracovní poznámky a orientaci
