import "./App.css";

import React from "react";

const App = () => {
  return (
    <>
      <h1 className="font-bold">logo</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container max-w-screen-lg ">
        <div className="left-side flex-col">
          <h2 className="font-bold text-center">test2</h2>
          <div className="sub flex justify-between">
            <div className="sub-heading">
              <h2 className="font-bold">Duration:80 Minutes</h2>
              <h2 className="font-bold">
                Read the following Instruction Carefully
              </h2>
            </div>
            <div className="sub-heading1 flex">
              <h2>Total Questios:0</h2>
            </div>
          </div>

          <ul className="my-4">
            <li className="my-2">
              
              This test comprises of multiple-choice questions (MCQs), multiple select Questions (MSQs) and numerical answer type (NAT) questions.



            </li>
            Multiple-choice questions will have only one correct option. Multiple-select questions will have one or more than one correct options.
            <li className="my-2">
            Numerical type questions will have a numerical answer and no options will be available. The answer should be entered using the virtual keyboard that appears on the monitor.
            </li>
            <li>
            Test consist of 1 and 2 mark(s) questions. 1/3rd mark(s) will be deducted for every wrong answer. No negative mark for Multiple select questions and Numerical type questions. No Partial marking for Multiple select questions.
            </li>
            <li>
            No mark will be deducted for an unattempted question
            </li>
            <li>
            You are advised not to close the browser window before submitting the test.
            </li>
            <li>
            In case the test does not load completely or becomes unresponsive, click on browser's refresh button to reload.
            </li>
            <li>
            You can write this test only once, so for best results do not try to guess answers.
            </li>
          </ul>
          <label for="dropdown">choose your default language: </label>
          <select id="dropdown" className="my-4">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-700" />
          <h2>Declaration:</h2>
          <input type="checkbox" name="option1" value="option1" />
          <label for="option1">Option 1</label>
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
