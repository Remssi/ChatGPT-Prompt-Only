import React from "react";
// manual fix: remove Switch as it no longer exists
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// manual fixes: import routes
import Home from "./Home";
import NotFound from "./NotFound";
import { questions } from "./questions";
import QuestionPage from "./QuestionPage";
import AskQuestion from "./AskQuestion";

// manual fix: add AskQuestionPage
// manual fix: change naming for ask question page
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home questions={questions} />}
        errorElement={<NotFound />}
      />
      <Route
        path="/question/:id"
        element={<QuestionPage questions={questions} />}
      />
      <Route path="/ask" element={<AskQuestion onSubmit={() => null} />} />
    </>
  )
);

const App: React.FC = () => {
  /***
   * manual fixes:
   * remove <Switch>
   * remove exact
   * rename component to element
   * component as jsx
   * use RouterProvider
   */
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
