const BeforeDelete = ({setIsDeletable, setIsClicked}) => {
    return (
        <dev className="popup">
            <dev className="popupinner">
                <h2>Are you sure?</h2>
                <dev>
                    <button onClick={() => {
                        setIsDeletable(true);
                        setIsClicked(false);
                        }}>Yes</button>
                    <button onClick={() => {
                        setIsDeletable(false);
                        setIsClicked(false);
                        }}>No</button>
                </dev>
            </dev>
        </dev>
    );
}

export default BeforeDelete;