import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

function App() {
    return (
        <div className="container">
            <h1>Jotto</h1>
            <Congrats success={true} />
            <GuessedWords
                guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
            />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
