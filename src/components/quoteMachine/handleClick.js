const handleClick = (props) => {
    let incrementIndex = props.incrementIndex === 5 ? 1 : props.incrementIndex + 1
    props.setIncrementIndex(incrementIndex)
}

export default handleClick
