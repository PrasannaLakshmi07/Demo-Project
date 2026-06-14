import { useState } from "react";

function DigitalIdentity() {

  const [generatedId, setGeneratedId] = useState("");

  const generateID = () => {
    setGeneratedId("SP-2026-1001");
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1
        style={{
          textAlign: "center",
          color: "#1b5e20"
        }}
      >
        🆔 Suryapura Digital Identity Portal
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Bringing every citizen online through secure
        digital identity and government services.
      </p>

      {/* Registration */}

      <div className="digital-card">

        <h2>Digital ID Registration</h2>

        <input placeholder="Full Name" />

        <input type="date" />

        <input placeholder="Mobile Number" />

        <input placeholder="Village Name" />

        <button onClick={generateID}>
          Generate Digital ID
        </button>

        {generatedId && (
          <div className="generated-id">
            Your Digital ID: {generatedId}
          </div>
        )}

      </div>

      {/* Services */}

      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#1b5e20"
        }}
      >
        Available Services
      </h2>

      <div className="service-grid">

        <div className="service-card">
          <h3>Birth Certificate</h3>
          <button>Apply Now</button>
        </div>

        <div className="service-card">
          <h3>Income Certificate</h3>
          <button>Apply Now</button>
        </div>

        <div className="service-card">
          <h3>Farmer Certificate</h3>
          <button>Apply Now</button>
        </div>

        <div className="service-card">
          <h3>Residence Certificate</h3>
          <button>Apply Now</button>
        </div>

      </div>

      {/* Dashboard */}

      <h2
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "#1b5e20"
        }}
      >
        Citizen Dashboard
      </h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>3,250</h3>
          <p>Documents Issued</p>
        </div>

        <div className="dashboard-card">
          <h3>9,800</h3>
          <p>Digital IDs Created</p>
        </div>

        <div className="dashboard-card">
          <h3>5,400</h3>
          <p>Online Requests</p>
        </div>

      </div>

    </div>
  );
}

export default DigitalIdentity;