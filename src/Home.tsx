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

      <h2>Recent Questions</h2>
      {recentQuestions.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          title={question.title}
          description={question.description}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
