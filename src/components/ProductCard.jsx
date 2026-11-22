// řeší jak vypdá jeden produkt
export default function ProductCard({ perfume }) {
  return (
    <li className="flex w-full flex-col gap-5 border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6 lg:p-8">
      <div className="flex flex-1 flex-col">
        <h4 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          {perfume.name}
        </h4>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {perfume.description}
        </p>

        <p className="mt-5 text-lg text-right font-semibold text-slate-900">
          {perfume.price} Kč
        </p>
      </div>

      <img
        src={perfume.image}
        alt={perfume.name}
        className="h-40 w-full max-w-56 self-center bg-slate-50 object-contain p-3 sm:h-36 sm:w-36 sm:max-w-none md:h-44 md:w-44"
      />
    </li>
  );
}
