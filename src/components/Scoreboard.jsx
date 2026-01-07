import React from "react";
import { useState, useEffect } from "react";
function Scoreboard() {
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("highScores")) || [],
  );

  return (
    highScores.length > 0 && (
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "2px solid #000",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center" }}>High Scores</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Player
              </th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Score
              </th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Level
              </th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {score.player}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {score.score}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {score.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
export default Scoreboard;
