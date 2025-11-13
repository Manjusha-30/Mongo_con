import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>MongoDB Data Viewer</h1>
      <h2>Student Data</h2>

      {students.length > 0 ? (
        <ul>
          {students.map((s, index) => (
            <li key={index}>
              👤 <b>{s.name}</b> — {s.age} years old
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default App;
