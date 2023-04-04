import "./App.css";

import React from "react";

const App = () => {
  return (
    <>
      <h1 className="font-bold">logo</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container  ">
        <div className="left-side flex-col">
          <h2 className="font-bold text-center">test2</h2>
          <div className="sub flex justify-between">
            <div className="sub-heading">
              <h2 className="font-bold">General Instructions</h2>
            </div>
            
          </div>

          <ul className="my-4">
            <li className="my-2">
              The clock will be set at the server. The countdown timer at the
              top right corner of screen will display the remaining time
              available for you to complete the examination. When the timer
              reaches zero, the examination will end by itself. You need not
              terminate the examination or submit your paper.
            </li>
            <li>
              The Question Palette displayed on the right side of screen will
              show the status of each question using one of the following
              symbols:
            </li>
            <li className="my-2">You have not visited the question yet.</li>
            <li>You have not answered the question.</li>
            <li>You have answered the question.</li>
            <li>
              You have NOT answered the question, but have marked the question
              for review.
            </li>
            <li>You have answered the question, but marked it for review.</li>
            <li>You have not answered the question.</li>
            <li>You have answered the question.</li>
            <li>
              You have NOT answered the question, but have marked the question
              for review.
            </li>
            <li>
              You answered the question also marked the question for review.
            </li>
            <li>
              The <span className="font-bold">Mark For Review</span> status for
              a question simply indicates that you would like to look at that
              question again. If a question is answered, but marked for review,
              then the answer will be considered for evaluation unless the
              status is modified by the candidate.
            </li>
            <h2 className="font-bold">Navigating to a Question</h2>
            <li>To answer a question, do the following:</li>
            <li>
              Click on the question number in the Question Palette at the right
              of your screen to go to that numbered question directly. Note that
              using this option does NOT save your answer to the current
              question.
            </li>
            <li>
              Click on <span className="font-bold">Save & Next </span>to save your answer for the current question
              and then go to the next question.
            </li>
            <li>
              Click on <span className="font-bold">Mark for Review & Next</span> to save your answer for the
              current question and also mark it for review , and then go to the
              next question. Note that your answer for the current question will
              not be saved, if you navigate to another question directly by
              clicking on a question number without saving the answer to the
              previous question. You can view all the questions by clicking on
              the <span>Question Paper</span> button. <span className="text-red-600">This feature is provided, so that if
              you want you can just see the entire question paper at a glance.</span>
            </li>
            <h2 className="font-bold">Answering a Question</h2>
            <li>
              Procedure for answering a multiple choice (MCQ) type question:
            </li>
            <li>
              Choose one answer from the 4 options (A,B,C,D) given below the
              question, click on the bubble placed before the chosen option.
            </li>
            <li>
              To deselect your chosen answer, click on the bubble of the chosen
              option again or click on the{" "}
              <span className="font-bold">Clear Response Erase Answer</span>{" "}
              button
            </li>
            <li>
              To change your chosen answer, click on the bubble of another
              option.
            </li>

            <li>
              To save your answer, you MUST click on the{" "}
              <span className="font-bold">Save & Next</span>
            </li>
            <li>Procedure for answering a numerical answer type question :</li>
            <li>
              To enter a number as your answer, use the virtual numerical
              keypad.
            </li>
            <li>
              A fraction (e.g. -0.3 or -.3) can be entered as an answer with or
              without "0" before the decimal point.{" "}
              <span className="text-red-600">
                As many as four decimal points, e.g. 12.5435 or 0.003 or
                -932.6711 or 12.82 can be entered.
              </span>
            </li>
            <li>
              To clear your answer, click on the{" "}
              <span className="font-bold">Clear Response</span> button
            </li>
            <li>
              To save your answer, you MUST click on the{" "}
              <span className="font-bold">Save & Next</span>
            </li>
            <li>
              Procedure for answering a multiple correct answers (MCAQ) type
              question
            </li>
            <li>
              Choose one or more answers from the 4 options (A,B,C,D) given
              below the question, click on the bubble placed before the chosen
              option.
            </li>
            <li>
              To deselect your chosen answer, click on the checkbox of the
              chosen option again
            </li>
            <li>
              To clear your marked responses, click on the{" "}
              <span className="font-bold">Clear Response</span> button
            </li>
            <li>
              To save your answer, you MUST click on the{" "}
              <span className="font-bold">Save & Next</span> button
            </li>
            
            
            <li>
            To mark a question for review, click on the <span className="font-bold">Mark for Review</span> & Next button. If an answer is selected (for MCQ/MCAQ) entered (for numerical answer type) for a question that is <span className="font-bold">Marked for Review </span>, that answer will be considered in the evaluation unless the status is modified by the candidate.
            </li>
            <li>
            To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.
            </li>
            <li>
            Note that ONLY Questions for which answers are <span className="font-bold">saved</span> or<span className="font-bold"> marked for review after answering</span> will be considered for evaluation.
            </li>
            <li>
              Sections in this question paper are displayed on the top bar of
              the screen. Questions in a Section can be viewed by clicking on
              the name of that Section. The Section you are currently viewing
              will be highlighted.
            </li>
            <li>
              After clicking the <span className="font-bold">Save & Next </span>button for the last question in a
              Section, you will automatically be taken to the first question of
              the next Section in sequence.
            </li>
            <li>
              You can move the mouse cursor over the name of a Section to view
              the answering status for that Section.
            </li>
          </ul>
          
          
          
          
          <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-700" />
          <div class="flex justify-between">
            <button class="bg-blue-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded justify-start">
              Button 1
            </button>

            <button class="bg-blue-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded justify-end">
              Button 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
