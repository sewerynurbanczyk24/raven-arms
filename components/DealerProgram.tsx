export default function DealerProgram() {
  return (
    <section className="border-t border-zinc-900 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Dealer Program
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black">
            BECOME A
            <br />
            RAVEN ARMS DEALER
          </h2>

          <p className="mt-8 text-zinc-400 max-w-3xl mx-auto text-lg">
            Join the Raven Arms dealer network and offer premium CNC
            performance components for AR15, PCC, pistols and shotguns.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-red-600 font-black text-xl">
              WHOLESALE
            </h3>

            <p className="text-zinc-500 mt-4">
              Competitive pricing for dealers and distributors.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-red-600 font-black text-xl">
              OEM
            </h3>

            <p className="text-zinc-500 mt-4">
              CNC manufacturing for custom branded components.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-red-600 font-black text-xl">
              EXPORT
            </h3>

            <p className="text-zinc-500 mt-4">
              International cooperation and distribution network.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-red-600 font-black text-xl">
              CUSTOM
            </h3>

            <p className="text-zinc-500 mt-4">
              Dedicated projects and limited product series.
            </p>
          </div>

        </div>

        <div className="text-center mt-16">

          <button className="bg-red-700 hover:bg-red-600 transition px-10 py-4 rounded-xl font-semibold">
            Become a Dealer
          </button>

        </div>

      </div>

    </section>
  );
}