 const stats = [
  "12,500 Residents",
  "96% Digital ID Coverage",
  "18 KM Roads Developed",
  "8 Smart Classrooms",
  "2,300 Farmers Supported",
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-4 px-6">
        {stats.map((item) => (
          <div
            key={item}
            className="bg-white shadow-lg p-6 rounded-xl text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}