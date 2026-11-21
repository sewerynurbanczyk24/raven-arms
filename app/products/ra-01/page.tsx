export default function RA01Page() {
  return (
    <main className="bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-32">

        <p className="text-red-600 uppercase tracking-[4px] text-sm">
          Raven Arms Product Series
        </p>

        <h1 className="mt-4 text-6xl font-black">
          RA-01
        </h1>

        <h2 className="text-3xl text-zinc-400 mt-4">
          Charging Handle
        </h2>

        <div className="mt-12">
          <img
            src="/products/ra01-charging-handle.jpg"
            alt="RA-01 Charging Handle"
            className="rounded-3xl border border-zinc-800 mx-auto"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Product Description
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              RA-01 Charging Handle został zaprojektowany jako
              komponent klasy premium przeznaczony dla najbardziej
              wymagających użytkowników platform sportowych
              i taktycznych.
            </p>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Konstrukcja oparta o aluminium lotnicze 7075-T6,
              precyzyjną obróbkę CNC oraz wytrzymałą anodę.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Specifications
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div>
                <span className="text-red-600 font-bold">
                  Material:
                </span>{" "}
                7075-T6 Aluminium
              </div>

              <div>
                <span className="text-red-600 font-bold">
                  Manufacturing:
                </span>{" "}
                CNC Machined
              </div>

              <div>
                <span className="text-red-600 font-bold">
                  Finish:
                </span>{" "}
                Hard Anodized
              </div>

              <div>
                <span className="text-red-600 font-bold">
                  Origin:
                </span>{" "}
                Made in Poland
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}