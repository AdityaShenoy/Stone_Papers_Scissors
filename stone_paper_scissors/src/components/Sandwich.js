import '../styles/Sandwich.css'
import sandwich from '../images/sandwich.png'

export default function Sandwich() {
    return (
        <div className="sandwich">
            <img
                src={sandwich}
                height={"40"}
                className="sandwich__image"/>
        </div>
    );
}