import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
