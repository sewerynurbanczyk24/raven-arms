export default function RA02Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <p className="text-red-600 uppercase tracking-[4px] text-sm">
          Raven Arms Product Series
        </p>

        <h1 className="mt-4 text-6xl font-black">
          RA-02
        </h1>

        <h2 className="text-3xl text-zinc-400 mt-4">
          Competition Trigger
        </h2>

        <div className="mt-12">
          <img
            src="/products/ra02-trigger.png"
            alt="RA-02 Competition Trigger"
            className="
              w-full
              rounded-3xl
              border
              border-zinc-800
            "
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Product Description
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              RA-02 Competition Trigger został zaprojektowany dla
              strzelców sportowych oczekujących krótkiego resetu,
              powtarzalnej pracy mechanizmu oraz maksymalnej kontroli
              podczas strzelania dynamicznego.
            </p>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Konstrukcja oparta o precyzyjną obróbkę CNC oraz
              komponenty klasy premium zapewniające trwałość i
              niezawodność.
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
                Made In Poland
              </div>

            </div>

          </div>

        </div>

        <a
          href="/"
          className="
            inline-block
            mt-12
            px-8
            py-4
            bg-red-700
            hover:bg-red-600
            transition
            rounded-xl
            font-semibold
          "
        >
          ← Back to Home
        </a>

      </div>
    </main>
  );
}