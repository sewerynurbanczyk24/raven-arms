export default function Contact() {
  return (
    <section
  id="contact"
  className="border-t border-zinc-900 bg-zinc-950"
>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black">
            LET'S BUILD
            <br />
            SOMETHING BETTER
          </h2>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto">
            Masz pomysł na nowy produkt, potrzebujesz tuningu
            lub chcesz zostać dealerem RAVEN ARMS?
            Skontaktuj się z nami.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="border border-zinc-800 rounded-2xl p-8">

            <h3 className="text-red-600 font-bold uppercase tracking-[2px]">
              Email
            </h3>

            <p className="mt-4 text-xl">
              kontakt@raven-arms.pl
            </p>

          </div>

          <div className="border border-zinc-800 rounded-2xl p-8">

            <h3 className="text-red-600 font-bold uppercase tracking-[2px]">
              Telefon
            </h3>

            <p className="mt-4 text-xl">
              +48 500 000 000
            </p>

          </div>

          <div className="border border-zinc-800 rounded-2xl p-8">

            <h3 className="text-red-600 font-bold uppercase tracking-[2px]">
              Lokalizacja
            </h3>

            <p className="mt-4 text-xl">
              Bestwina, Polska
            </p>

          </div>

        </div>

        <div className="mt-16 border border-zinc-800 rounded-3xl p-10">

          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="bg-black border border-zinc-800 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Adres e-mail"
              className="bg-black border border-zinc-800 rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Temat"
              className="bg-black border border-zinc-800 rounded-xl p-4"
            />

            <textarea
              rows={6}
              placeholder="Treść wiadomości"
              className="bg-black border border-zinc-800 rounded-xl p-4 resize-none"
            />

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 transition rounded-xl py-4 font-semibold"
            >
              Wyślij wiadomość
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}