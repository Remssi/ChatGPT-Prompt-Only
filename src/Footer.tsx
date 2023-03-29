import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#eee",
        padding: "1rem",
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>© 2023 My Q&A App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
