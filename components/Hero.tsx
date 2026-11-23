export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src="/gallery/ar15.jpg"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-20
        "
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/90
          to-black/40
        "
      />

      {/* Red Glow */}
      <div
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          bg-red-700/20
          blur-[180px]
          rounded-full
        "
      />

      {/* Raven Watermark */}
      <img
        src="/branding/raven-logo.png"
        alt="Raven Arms"
        className="
          absolute
          right-[-150px]
          top-1/2
          -translate-y-1/2
          w-[1000px]
          opacity-[0.06]
          pointer-events-none
          select-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          min-h-screen
          grid
          lg:grid-cols-2
          gap-12
          items-center
          pt-24
        "
      >
        {/* LEFT SIDE */}
        <div>
          <p
            className="
              uppercase
              tracking-[6px]
              text-red-600
              text-sm
              mb-6
            "
          >
            Tactical Parts. Higher Performance.
          </p>

          <h1
            className="
              text-6xl
              md:text-7xl
              xl:text-8xl
              font-black
              leading-none
              uppercase
              tracking-tight
            "
          >
            RAVEN ARMS
          </h1>

          <div className="mt-8 space-y-2">
            <p
              className="
                uppercase
                tracking-[4px]
                text-zinc-200
                text-lg
              "
            >
              Precision Engineered.
            </p>

            <p
              className="
                uppercase
                tracking-[4px]
                text-zinc-500
                text-lg
              "
            >
              Built For Performance.
            </p>
          </div>

          <p
            className="
              mt-8
              text-zinc-400
              text-lg
              max-w-xl
              leading-relaxed
            "
          >
            Komponenty CNC klasy premium do platform AR15,
            PCC, pistoletów sportowych oraz strzelb sportowych.
            Projektowane dla najbardziej wymagających strzelców.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#products"
              className="
                bg-red-700
                hover:bg-red-600
                transition
                px-8
                py-4
                uppercase
                tracking-wider
                font-bold
              "
            >
              ZOBACZ PRODUKTY →
            </a>

            <a
              href="#dealers"
              className="
                border
                border-zinc-700
                hover:border-zinc-500
                transition
                px-8
                py-4
                uppercase
                tracking-wider
                font-bold
              "
            >
              DEALERZY
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg">
            <div>
              <div className="text-red-600 text-xl font-black">
                7075-T6
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Aluminium
              </div>
            </div>

            <div>
              <div className="text-red-600 text-xl font-black">
                CNC
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Machined
              </div>
            </div>

            <div>
              <div className="text-red-600 text-xl font-black">
                HARD
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Anodized
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src="/products/ra01-charging-handle.png"
            alt="RA-01 Charging Handle"
            className="
              w-full
              max-w-5xl
              mx-auto
              drop-shadow-[0_0_80px_rgba(220,38,38,0.35)]
            "
          />

          <div
            className="
              absolute
              bottom-4
              left-0
              border-l-2
              border-red-600
              pl-4
            "
          >
            <p
              className="
                text-zinc-500
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              RA-01
            </p>

            <h3
              className="
                text-2xl
                font-black
                uppercase
              "
            >
              Charging Handle
            </h3>

            <div className="mt-3 text-sm text-zinc-400 uppercase space-y-1">
              <p>7075-T6 Aluminium</p>
              <p>CNC Machined</p>
              <p>Hard Anodized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}