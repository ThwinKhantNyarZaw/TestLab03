import React from "react";
import "./../styles/Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Description of Feature 1.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Description of Feature 2.</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>Description of Feature 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
