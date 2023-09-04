const PositionList = ({positions}) => {
    return (
        <div className="PositionTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>{positions.map((position) => {
                    return (
                        <tr key={position._id}>
                            <td>{position.name}</td>
                            <td>{position.salary}</td>
                        </tr>
                    )
                })}</tbody>
            </table>
        </div>
    )
}

export default PositionList;