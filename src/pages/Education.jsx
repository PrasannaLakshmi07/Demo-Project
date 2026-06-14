import { useState } from "react";

function Education() {
  const [showForm, setShowForm] = useState(false);
  const [schoolName, setSchoolName] = useState("");

  const openForm = (school) => {
    setSchoolName(school);
    setShowForm(true);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ textAlign: "center", color: "#1b5e20" }}>
        Suryapura Education Department
      </h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "40px",
        }}
      >
        Empowering young minds through quality education.
      </p>

      {/* School 1 */}
      <div className="school-card">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="school"
        />

        <div>
          <h2>Suryapura Public School</h2>

          <p>
            Smart classrooms, English medium education,
            computer labs and transportation facilities.
          </p>

          <ul>
            <li>Smart Classrooms</li>
            <li>Computer Lab</li>
            <li>School Bus</li>
            <li>English Medium</li>
          </ul>

          <p>
            <strong>Timings:</strong> 8:30 AM - 3:30 PM
          </p>

          <button
            onClick={() =>
              openForm("Suryapura Public School")
            }
          >
            Apply For Admission
          </button>
        </div>
      </div>

      {/* School 2 */}
      <div className="school-card">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
          alt="school"
        />

        <div>
          <h2>Green Valley High School</h2>

          <p>
            Focused on academics, sports and digital
            learning.
          </p>

          <ul>
            <li>Digital Learning</li>
            <li>Sports Ground</li>
            <li>Library</li>
            <li>Science Lab</li>
          </ul>

          <p>
            <strong>Timings:</strong> 8:00 AM - 4:00 PM
          </p>

          <button
            onClick={() =>
              openForm("Green Valley High School")
            }
          >
            Apply For Admission
          </button>
        </div>
      </div>

      {/* School 3 */}
      <div className="school-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_YQJoxVAaKWUrZiV-YecSwETH49Sreef3kBRY7H2_Q&s=10"
          alt="school"
        />

        <div>
          <h2>Bright Future Academy</h2>

          <p>
            Providing holistic education and skill
            development opportunities.
          </p>

          <ul>
            <li>Skill Development</li>
            <li>Activity Based Learning</li>
            <li>Library</li>
            <li>Sports Facilities</li>
          </ul>

          <p>
            <strong>Timings:</strong> 9:00 AM - 3:00 PM
          </p>

          <button
            onClick={() =>
              openForm("Bright Future Academy")
            }
          >
            Apply For Admission
          </button>
        </div>
      </div>

      {/* Popup Form */}

      {showForm && (
        <div className="popup-overlay">
          <div className="popup">

            <h2>{schoolName}</h2>

            <input
              type="text"
              placeholder="Student Name"
            />

            <input
              type="number"
              placeholder="Age"
            />

            <input
              type="text"
              placeholder="Class Applying For"
            />

            <input
              type="text"
              placeholder="Parent Name"
            />

            <input
              type="email"
              placeholder="Parent Email"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Address"
            ></textarea>

            <button
              onClick={() => {
                alert(
                  "Application Submitted Successfully!"
                );
                setShowForm(false);
              }}
            >
              Submit Application
            </button>

            <button
              className="close-btn"
              onClick={() =>
                setShowForm(false)
              }
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Education;