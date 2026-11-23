export default function About() {
  return (
    <section className="border-t border-zinc-900 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEWA STRONA */}

          <div>

            <p className="uppercase tracking-[4px] text-red-600 text-sm">
              About Raven Arms
            </p>

            <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
              BORN FROM
              <br />
              PRECISION
            </h2>

            <div className="w-24 h-[2px] bg-red-600 mt-8" />

            <p
              className="
                mt-10
                text-xl
                text-zinc-300
                leading-relaxed
              "
            >
              Raven Arms powstało na styku strzelectwa sportowego,
              nowoczesnego wzornictwa i precyzyjnej obróbki CNC.
            </p>

            <p
              className="
                mt-8
                text-zinc-500
                leading-relaxed
              "
            >
              Tworzymy komponenty zwiększające ergonomię,
              szybkość obsługi i niezawodność najpopularniejszych
              platform używanych przez wymagających strzelców.
            </p>

            <p
              className="
                mt-8
                text-zinc-500
                leading-relaxed
              "
            >
              Wierzymy, że każdy detal ma znaczenie.
              Każda linia, każde frezowanie i każdy gram materiału
              powinny mieć swoje uzasadnienie.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <div className="text-4xl font-black text-red-600">
                  CNC
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Machining
                </div>
              </div>

              <div>
                <div className="text-4xl font-black text-red-600">
                  7075
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Aluminium
                </div>
              </div>

              <div>
                <div className="text-4xl font-black text-red-600">
                  PL
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Made in Poland
                </div>
              </div>

            </div>

          </div>

          {/* PRAWA STRONA */}

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-red-700/20
                blur-[180px]
              "
            />

            <img
              src="/branding/raven-full-logo.png"
              alt="Raven Arms"
              className="
                relative
                z-10
                mx-auto
                max-w-xl
              "
            />

          </div>

        </div>

        {/* MANIFEST */}

        <div
          className="
            mt-32
            border-t
            border-zinc-900
            pt-20
          "
        >

          <p
            className="
              text-3xl
              lg:text-5xl
              font-black
              uppercase
              leading-tight
              max-w-5xl
            "
          >
            We don't build parts.
            <span className="text-red-600">
              {" "}We build confidence.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}