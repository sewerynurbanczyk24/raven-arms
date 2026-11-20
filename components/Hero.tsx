export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Czerwone światło */}

      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-700/20 blur-[150px] rounded-full" />

      {/* Kruk w tle */}

      <img
        src="/branding/raven-logo.png"
        alt="Raven Arms"
        className="
          absolute
          right-[-50px]
          top-1/2
          -translate-y-1/2
          w-[800px]
          opacity-[0.15]
          pointer-events-none
          select-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEWA STRONA */}

        <div>

          <p className="uppercase tracking-[8px] text-red-600 text-sm mb-6">
            Tactical Parts. Higher Performance.
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-none uppercase">
            RAVEN
            <br />
            <span className="text-red-600">
              ARMS
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-xl max-w-xl">
            Komponenty CNC klasy premium do platform AR15,
            PCC, pistoletów sportowych oraz strzelb.
            Projektowane dla wymagających strzelców.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-red-700 hover:bg-red-600 transition px-8 py-4 rounded-lg font-semibold">
              Produkty
            </button>

            <button className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-lg">
              Zostań dealerem
            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-12">

            <div>
              <div className="text-red-600 text-3xl font-black">
                7075
              </div>
              <div className="text-zinc-500 text-sm">
                Aluminium
              </div>
            </div>

            <div>
              <div className="text-red-600 text-3xl font-black">
                CNC
              </div>
              <div className="text-zinc-500 text-sm">
                Machined
              </div>
            </div>

            <div>
              <div className="text-red-600 text-3xl font-black">
                PL
              </div>
              <div className="text-zinc-500 text-sm">
                Made in Poland
              </div>
            </div>

          </div>

        </div>

        {/* PRAWA STRONA */}

        <div className="flex justify-center">

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-10 w-full max-w-md backdrop-blur">

            <div className="text-red-600 font-bold uppercase text-sm tracking-widest">
              Featured Product
            </div>

            <h2 className="text-5xl font-black mt-3">
              RA-01
            </h2>

            <h3 className="text-2xl text-zinc-300 mt-2">
              Charging Handle
            </h3>

            <div className="border-t border-zinc-800 my-8" />

            <div className="space-y-4 text-zinc-400">

              <div>✓ 7075‑T6 Aluminium</div>

              <div>✓ Hard Anodized</div>

              <div>✓ Competition Ready</div>

              <div>✓ Precision CNC Machined</div>

            </div>

            <button className="w-full mt-10 bg-red-700 hover:bg-red-600 transition py-4 rounded-xl font-semibold">
              Zobacz szczegóły
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}