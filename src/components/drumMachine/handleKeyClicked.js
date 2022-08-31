

export const handleKeyClicked = (e, keyName, displayName, props) => {
    props.data.setDisplay(displayName)
    if (props.data.power) {
        let audio = document.getElementById(keyName);
        audio.play();
    }
}