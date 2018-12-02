import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import store from "./configureStore";

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
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
