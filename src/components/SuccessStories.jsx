const stories = [
  "Farmer income increased by 35%",
  "School attendance improved by 28%",
  "Travel time reduced by 50%",
];

export default function SuccessStories() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story}
              className="bg-white p-6 rounded-xl shadow"
            >
              {story}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}