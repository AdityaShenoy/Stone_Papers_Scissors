import "../styles/App.css"
import stone from "../images/stone.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import Sandwich from "./Sandwich"
import Hand from "./Hand"
import AppButton from "./AppButton"

export default function App() {
    return (
        <div className="app">
            <h1 className="app__header">Stone Paper Scissors</h1>
            <Sandwich />

            <div className="app__score">
                <h3>Score</h3>
                <h3>{1}:{0}</h3>
            </div>
            
            <div className="app__hands">
                <Hand src={paper} modifier={" hand__user"} />
                <Hand src={stone} />
            </div>

            <div className="app__buttons">
                <AppButton name="Stone" shortcut="S" />
                <AppButton name="Paper" shortcut="P" />
                <AppButton name="Scissors" shortcut="X" />
            </div>
        </div>
    );
}