import '../styles/Hand.css'

export default function Hand(props) {
    return (
        <img
            src={props.src}
            className={"hand" + (props.modifier ? props.modifier : "")}
        />
    );
}