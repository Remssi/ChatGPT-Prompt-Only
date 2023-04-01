import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";

interface HomeProps {
  questions: { id: number; title: string; description: string }[];
}

const Home: React.FC<HomeProps> = ({ questions }) => {
  const recentQuestions = questions.slice(0, 5);

  return (
    <div>
      <Header />

      <div style={{ padding: "1rem" }}>
        <h2>Recent Questions</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {recentQuestions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
