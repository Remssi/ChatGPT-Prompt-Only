import React from "react";
import "./Answer.css";

interface AnswerProps {
  text: string;
  author: string;
  date: string;
}

const Answer: React.FC<AnswerProps> = ({ text, author, date }) => {
  return (
    <div className="Answer">
      <p className="Answer-text">{text}</p>
      <div className="Answer-info">
        <span className="Answer-author">{author}</span>
        <span className="Answer-date">{date}</span>
      </div>
    </div>
  );
};

export default Answer;
