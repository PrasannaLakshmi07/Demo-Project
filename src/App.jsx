import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Agastya from "./assets/Agastya.webp";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      title: "Empowering Every Farmer",
      desc: "Supporting agriculture through innovation and sustainable practices.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      title: "Building Future Leaders",
      desc: "Creating smart classrooms and quality education for every child.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      title: "Connecting Communities",
      desc: "Developing roads and infrastructure for a stronger future.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Every Citizen Connected",
      desc: "Providing digital identity and online services for all.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Suryapura Portal</h2>

        <ul>
          <li>Home</li>
          <li
  onClick={() => navigate("/education")}
  style={{ cursor: "pointer" }}
>
  Education
</li>
          <li
  onClick={() => navigate("//infrastructure")}
  style={{ cursor: "pointer" }}
>
  Infrastructure
</li>
          <li
  onClick={() => navigate("/farmers")}
  style={{ cursor: "pointer" }}
>
  Farmers
</li>
        </ul>
      </nav>

      {/* Hero Slider */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="overlay">

          <div className="hero-content">

            <h1>{slides[currentSlide].title}</h1>

            <p>{slides[currentSlide].desc}</p>

            <button>
              {slides[currentSlide].button}
            </button>

            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={
                    currentSlide === index
                      ? "dot active"
                      : "dot"
                  }
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Welcome */}
      <section className="welcome">
        <h2>Welcome to Suryapura</h2>

        <p>
          A digital initiative dedicated to empowering
          farmers, improving education, strengthening
          infrastructure, and promoting transparent
          governance.
        </p>
      </section>

      {/* Quick Access */}
      <section className="cards">
        <div
  className="card"
  onClick={() => navigate("/education")}
>
  <h3>🎓 Education</h3>

  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate("/education");
    }}
  >
    View Programs
  </button>
</div>

        <div
  className="card"
  onClick={() => navigate("/farmers")}
>
  <h3>🌾 Farmers</h3>

  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate("/farmers");
    }}
  >
    Explore Support
  </button>
</div>

        <div
  className="card"
  onClick={() => navigate("/infrastructure")}
>
  <h3>🛣 Infrastructure</h3>

  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate("/infrastructure");
    }}
  >
    View Projects
  </button>
</div>

        <div
  className="card"
  onClick={() => navigate("/digital-identity")}
>
  <h3>🆔 Digital Identity</h3>

  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate("/digital-identity");
    }}
  >
    Citizen Services
  </button>
</div>
</section>
     
      {/* Ambassador */}
      <section className="ambassador">

  <div className="ambassador-card">

    <img
      src={Agastya}
      alt="Leader"
    />

    <div className="ambassador-content">

      <h2>Meet Agastya Singhania</h2>

      <p>
        Development Ambassador of Suryapura leading
        the village toward sustainable growth and innovation.
      </p>

      <button onClick={() => navigate("/vision")}>
        Read His Vision
      </button>

    </div>

  </div>

</section>

      {/* Updates */}
      <section className="updates">
        <h2>Latest Updates</h2>

        <div className="update-list">
          <div className="update">
            Road Project Completed
          </div>

          <div className="update">
            Digital Lab Inaugurated
          </div>

          <div className="update">
            Health Camp Conducted
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>Suryapura Village Development Portal</h3>

        <p>
          Empowering communities through education,
          agriculture and digital governance.
        </p>
      </footer>
    </>
  );
}

export default App;