const updates = [
  "Road Project Completed",
  "Water Tank Renovation",
  "Digital Lab Launch",
  "Health Camp Conducted",
];

export default function PanchayatUpdates() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">
          Panchayat Updates
        </h2>

        {updates.map((u) => (
          <div
            key={u}
            className="border-l-4 border-green-700 pl-4 py-4"
          >
            {u}
          </div>
        ))}
      </div>
    </section>
  );
}