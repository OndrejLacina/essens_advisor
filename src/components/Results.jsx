// řeší, které produkty se doporučí
export default function Results({ odpovediProp }) {
  return (
    <div>
      <h3>Výsledky</h3>
      <pre>{JSON.stringify(odpovediProp, null, 2)}</pre>
    </div>
  );
}
