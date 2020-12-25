import '../styles/Score.css';

export default function Score() {
    return (
        <div className="score">
            <div>Score</div>
            <div>1:0</div>
            <div className="score__reset">
                Reset</div>
        </div>
    );
}