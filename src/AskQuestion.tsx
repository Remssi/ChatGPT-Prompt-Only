import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// manual fix: add import
import "./AskQuestion.css";

interface AskQuestionProps {
  onSubmit: (title: string, description: string) => void;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(title, description);
  };

  return (
    <div className="container">
      <Header />
      <div className="ask-question-container">
        <form className="ask-question-form" onSubmit={handleSubmit}>
          <h2 className="ask-question-title">Ask a Question</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              rows={5}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AskQuestion;
