import React from "react";
import { useParams } from "react-router-dom";

interface QuestionPageProps {
  questions: {
    id: number;
    title: string;
    description: string;
    answers: {
      id: number;
      author: string;
      text: string;
    }[];
  }[];
}

const QuestionPage: React.FC<QuestionPageProps> = ({ questions }) => {
  const { id } = useParams<{ id: string }>();
  const question = questions.find(
    (q) => q.id === parseInt(/* manual "fix": add type cast */ id as string)
  );

  if (!question) {
    return (
      <div>
        <h2>Question not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.description}</p>
      <h3>Answers:</h3>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <strong>{answer.author}: </strong>
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;
