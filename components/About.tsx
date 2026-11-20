export default function About() {
  return (
    <section className="border-t border-zinc-900 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEWA STRONA */}

        <div>

          <p className="uppercase tracking-[4px] text-red-600 text-sm mb-4">
            About Raven Arms
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            BORN FROM
            <br />
            PRECISION
          </h2>

          <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
            RAVEN ARMS powstało z połączenia pasji do strzelectwa
            sportowego, tuningu broni oraz precyzyjnej obróbki CNC.
          </p>

          <p className="mt-6 text-zinc-500 leading-relaxed">
            Projektujemy i produkujemy komponenty poprawiające
            ergonomię, szybkość obsługi oraz niezawodność platform
            AR15, PCC, pistoletów sportowych i strzelb.
          </p>

          <p className="mt-6 text-zinc-500 leading-relaxed">
            Naszą misją jest dostarczanie części klasy premium,
            które wyglądają równie dobrze jak działają.
          </p>

        </div>

        {/* PRAWA STRONA */}

        <div className="relative">

          <div className="absolute inset-0 bg-red-700/20 blur-[150px]"></div>

          <img
            src="/branding/raven-full-logo.png"
            alt="Raven Arms"
            className="relative z-10 mx-auto max-w-md"
          />

        </div>

      </div>

    </section>
  );
}