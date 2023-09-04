const PositionDropDown = ({positions}) => {
    return (
        <form>
            <select>{positions.map((position) => {
                return (
                    <option value={position.name}>{position.name}</option>
                )
            })}</select>
            <input type="submit"></input>
        </form>
    )
}

export default PositionDropDown;