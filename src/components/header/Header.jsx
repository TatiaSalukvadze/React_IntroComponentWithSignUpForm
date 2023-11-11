import React from "react";
import "./header.css";

function Header() {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.h1}>Learn to code by watching others</h1>
      <p style={styles.p}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}

const styles = {
  wrap: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: "64px",
  },
  h1: {
    fontWeight: 700,
    marginTop: "88px",
  },
  p: {
    fontSize: "16px",
    textAlign: "center",
    fontWeight: 500,
    lineHeight: "26px",
    marginTop: "16px",
  },
};

export default Header;
