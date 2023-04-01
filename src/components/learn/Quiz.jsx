import { useState } from "react";

export function Quiz({ page, sublesson, quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setErrorPopup] = useState(false);

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const solution = quizData ? quizData[page - 1].solution : "";
    const isCorrect = selectedAnswer === solution;

    if (isCorrect) {
      console.log("Submission correct!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons/sublesson/${sublesson}/progress/${page}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("idToken"),
        },
      })
        .then((res) => res.json())
        .catch((err) => {
          // Trigger Unauthenticated Popup
        });
    } else {
      console.log("Submission incorrect!");
      setErrorPopup(true);
      setTimeout(() => setErrorPopup(false), 4000);
    }
  };

  const { question, answers } = quizData ? quizData[page - 1] : {question: "", answers: [""]};

  return (
    <div
      style={{
        backgroundColor: "#212121",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "85%",
      }}
    >
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Question {page}:
      </h2>
      <p style={{ color: "white", fontSize: "1.25rem", marginBottom: "1rem" }}>
        {question}
      </p>
      <form onSubmit={handleSubmit}>
        {answers.map((answer, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <input
              type="radio"
              id={`option${index + 1}`}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerSelection}
              style={{ marginRight: "0.5rem" }}
            />
            <label
              htmlFor={`option${index + 1}`}
              style={{ color: "white", fontSize: "1.25rem" }}
            >
              {answer}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ marginTop: "1rem" }}
        >
          Submit
        </button>
      </form>
      {showPopup && <div className="fixed center bottom-6 right-6 bg-[#7cd313] p-2 rounded-md">Correct!</div>}
      {showError && <div className="fixed center bottom-6 right-6 bg-[#f44a3a] p-2 rounded-md">Incorrect!</div>}
    </div>
  );
}
