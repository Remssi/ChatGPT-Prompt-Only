import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#19376D",
        color: "white",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0 }}>© 2023 My Q&A App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
