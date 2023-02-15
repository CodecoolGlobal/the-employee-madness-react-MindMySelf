const handleSubmit = (newName, newWeight) =>{
    let newTool = {
        name: newName,
        weight: newWeight
    };

    function postNewTool (toolObject) {
        fetch("/tools", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(toolObject),
          }).then((res) => res.json());
    }
    postNewTool(newTool);
}

export default handleSubmit;