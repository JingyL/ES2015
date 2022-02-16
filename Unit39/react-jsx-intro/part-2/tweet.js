const Tweet = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.title}</p>
            <p>{props.message}</p>
            <p>{props.date}</p>
        </div>
    )
};