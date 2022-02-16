const App = () => {
    return (
        <div>
            <Tweet username="Test1"
                title="A"
                message="AAA"
                date={new Date().toDateString()} />
            <Tweet username="Test2"
                title="B"
                message="BBB"
                date={new Date().toDateString()} />
            <Tweet username="Test3"
                title="C"
                message="CCC"
                date={new Date().toDateString()} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"))