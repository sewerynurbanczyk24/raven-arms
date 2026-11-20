export default function Products() {
  const products = [
    {
      code: "RA-01",
      name: "Charging Handle",
    },
    {
      code: "RA-02",
      name: "Competition Trigger",
    },
    {
      code: "RA-03",
      name: "Extended Mag Release",
    },
    {
      code: "RA-04",
      name: "Competition Safety",
    },
    {
      code: "RA-05",
      name: "Picatinny Rail",
    },
    {
      code: "RA-06",
      name: "Mohac Charging Lever",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[4px] text-red-600 text-sm">
          Product Line
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-black">
          RAVEN ARMS
          <br />
          PRODUCT SERIES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {products.map((product) => (
            <div
              key={product.code}
              className="
                border
                border-zinc-800
                rounded-2xl
                p-8
                hover:border-red-700
                transition
              "
            >
              <div className="text-red-600 font-black text-3xl">
                {product.code}
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                {product.name}
              </h3>

              <button className="mt-8 border border-zinc-700 px-6 py-3 rounded-lg hover:border-red-700 transition">
                View Product
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}