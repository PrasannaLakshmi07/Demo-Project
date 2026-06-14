import { useState } from "react";

function Farmers() {
  const [showLoan, setShowLoan] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <div style={{ padding: "40px" }}>

      <h1 style={{ textAlign: "center", color: "#1b5e20" }}>
        🌾 Suryapura Farmers Portal
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "10px"
        }}
      >
        Empowering farmers through technology,
        financial support and modern agriculture.
      </p>

      {/* Farmer Welfare */}

      <div className="farmer-section">

        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="Farmer"
        />

        <div>
          <h2>Farmer Welfare Center</h2>

          <p>
            Get expert advice, crop guidance,
            subsidy information and training programs.
          </p>

          <button
            onClick={() => setShowConsultation(true)}
          >
            Book Consultation
          </button>
        </div>

      </div>

      {/* AgroCare Store */}

      <div className="farmer-section">

        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d"
          alt="Store"
        />

        <div>
          <h2>AgroCare Pesticide Store</h2>

          <ul>
            <li>Seeds</li>
            <li>Pesticides</li>
            <li>Fertilizers</li>
            <li>Organic Products</li>
            <li>Drip Irrigation Equipment</li>
          </ul>

          <button>
            View Products
          </button>
        </div>

      </div>

      {/* Bank */}

      <div className="farmer-section">

        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Bank"
        />

        <div>
          <h2>Rural Farmers Bank</h2>

          <p>
            Low-interest agricultural loans,
            crop insurance and Kisan credit cards.
          </p>

          <button
            onClick={() => setShowLoan(true)}
          >
            Apply For Loan
          </button>
        </div>

      </div>

      {/* Schemes */}

      <h2
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#1b5e20"
        }}
      >
        Government Schemes
      </h2>

      <div className="scheme-grid">

        <div className="scheme-card">
          PM Kisan Yojana
        </div>

        <div className="scheme-card">
          Soil Health Card
        </div>

        <div className="scheme-card">
          Crop Insurance
        </div>

        <div className="scheme-card">
          Solar Pump Subsidy
        </div>

      </div>

      {/* Consultation Popup */}

      {showConsultation && (
        <div className="popup-overlay">
          <div className="popup">

            <h2>Farmer Consultation</h2>

            <input placeholder="Farmer Name" />

            <input placeholder="Village" />

            <input placeholder="Crop Type" />

            <input placeholder="Phone Number" />

            <button
              onClick={() => {
                alert("Consultation Booked!");
                setShowConsultation(false);
              }}
            >
              Submit
            </button>

          </div>
        </div>
      )}

      {/* Loan Popup */}

      {showLoan && (
        <div className="popup-overlay">
          <div className="popup">

            <h2>Loan Application</h2>

            <input placeholder="Farmer Name" />

            <input placeholder="Phone Number" />

            <input placeholder="Loan Amount" />

            <input placeholder="Purpose" />

            <button
              onClick={() => {
                alert("Loan Application Submitted!");
                setShowLoan(false);
              }}
            >
              Submit
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Farmers;