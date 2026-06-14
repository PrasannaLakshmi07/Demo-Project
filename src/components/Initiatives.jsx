const cards = [
  {
    title: "Smart Education",
    text: "Digital classrooms and learning centers.",
  },
  {
    title: "Farmer Empowerment",
    text: "Crop guidance and market insights.",
  },
  {
    title: "Road Infrastructure",
    text: "Connecting every household.",
  },
  {
    title: "Digital Identity",
    text: "Citizen registration services.",
  },
];

export default function Initiatives() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Development Initiatives
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="font-bold text-xl mb-3">
                {card.title}
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}