export default function SocialPosts() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-xl mb-3">
            🌾 Farmer First Initiative
          </h3>

          <p>
            Over 2,300 farmers enrolled in
            digital crop advisory services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-xl mb-3">
            🎓 Smart Education Mission
          </h3>

          <p>
            New digital classrooms are empowering
            the next generation.
          </p>
        </div>

      </div>
    </section>
  );
}