import React from "react";
// manual fix: replace useHistory since it no longer exists
import { useNavigate } from "react-router-dom";
import "./Question.css";

interface QuestionProps {
  id: number;
  title: string;
  description: string;
}

const Question: React.FC<QuestionProps> = ({ id, title, description }) => {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate(`/question/${id}`);
  };

  const truncatedDescription = description.slice(0, 50) + "...";

  // manual fix: add className="question"
  return (
    <div
      className="question"
      onClick={handleQuestionClick}
      style={{ cursor: "pointer" }}
    >
      <h2>{title}</h2>
      <p>{truncatedDescription}</p>
    </div>
  );
};

export default Question;
