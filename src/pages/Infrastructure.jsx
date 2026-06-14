function Infrastructure() {
  return (
    <div style={{ padding: "40px" }}>

      <h1
        style={{
          textAlign: "center",
          color: "#1b5e20"
        }}
      >
        🛣 Suryapura Infrastructure Development
      </h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "40px"
        }}
      >
        Building modern infrastructure for a connected,
        sustainable and prosperous village.
      </p>

      {/* Road Project */}

      <div className="infra-card">

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="Road"
        />

        <div>
          <h2>Road Expansion Project</h2>

          <p>
            18 KM of modern roads completed to improve
            transportation, trade and accessibility.
          </p>

          <ul>
            <li>18 KM Completed</li>
            <li>2 KM Under Construction</li>
            <li>Street Sign Improvements</li>
          </ul>

          <button>View Details</button>
        </div>

      </div>

      {/* Street Lights */}

      <div className="infra-card">

        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390"
          alt="Lights"
        />

        <div>
          <h2>Smart Street Lights</h2>

          <p>
            Installation of energy-efficient LED lights
            throughout the village.
          </p>

          <ul>
            <li>120 LED Lights Installed</li>
            <li>Solar Backup Enabled</li>
            <li>Low Energy Consumption</li>
          </ul>

          <button>View Details</button>
        </div>

      </div>

      {/* Water Supply */}

      <div className="infra-card">

        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
          alt="Water"
        />

        <div>
          <h2>Water Supply Modernization</h2>

          <p>
            Upgrading pipelines and storage facilities
            to ensure clean drinking water for all citizens.
          </p>

          <ul>
            <li>24x7 Water Initiative</li>
            <li>New Storage Tanks</li>
            <li>Purification Facilities</li>
          </ul>

          <button>View Details</button>
        </div>

      </div>

      {/* Village Connectivity */}

      <h2
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#1b5e20"
        }}
      >
        Village Development Statistics
      </h2>

      <div className="infra-stats">

        <div className="infra-stat-card">
          <h3>18 KM</h3>
          <p>Roads Built</p>
        </div>

        <div className="infra-stat-card">
          <h3>120</h3>
          <p>Street Lights</p>
        </div>

        <div className="infra-stat-card">
          <h3>96%</h3>
          <p>Water Coverage</p>
        </div>

        <div className="infra-stat-card">
          <h3>15+</h3>
          <p>Development Projects</p>
        </div>

      </div>

    </div>
  );
}

export default Infrastructure;