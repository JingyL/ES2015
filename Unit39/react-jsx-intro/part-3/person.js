const Person = (props) => {
    let message;
    if (props.age < 18) {
        message = "You must be 18"
    } else {
        message = <span>
        please go vote!
      </span>
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <h3>{message}</h3>
            <ul>{props.hobbies.map(h =>
                 <li>{h}</li>
                )}
            </ul>
        </div>
    )
};