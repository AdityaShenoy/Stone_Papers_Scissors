import "../styles/AppButton.css"

export default function AppButton(props) {
    return (
        <button className="appButton">
            {props.name}{props.shortcut ? (" (" + props.shortcut + ")") : ""}
        </button>
    )
}