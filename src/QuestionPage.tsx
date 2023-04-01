import React from "react";
import { useParams } from "react-router-dom";
import Answer from "./Answer";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

interface AnswerData {
  id: number;
  text: string;
  author: string;
  date: string;
}

interface QuestionData {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  answers: AnswerData[];
}

interface QuestionPageProps {
  questions: QuestionData[];
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
    <>
      <Header />
      <Main>
        <QuestionContainer>
          <Title>{question.title}</Title>
          <p className="QuestionPage-description">{question.description}</p>
        </QuestionContainer>

        <AnswersContainer>
          {question?.answers.map((answer) => (
            <Answer
              key={answer.id}
              text={answer.text}
              author={answer.author}
              date={answer.date}
            />
          ))}
        </AnswersContainer>
      </Main>
      <Footer />
    </>
  );
};

// manual fix: remove white color
const Title = styled.h1`
  margin: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const QuestionContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const AnswersContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export default QuestionPage;
