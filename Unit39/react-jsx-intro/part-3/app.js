const App = () => {
    return (
        <div>
            <p>😵😵😵😵😵</p>
            <Person name="Teddy"
                age={7}
                hobbies={['Ski', 'Hiking', 'Photography']}
            />
             <p>😵😵😵😵😵</p>
            <Person name="Bob"
                age={18}
                hobbies={['Make foods', 'Walk dogs']}
            />
             <p>😵😵😵😵😵</p>
            <Person name="Tracy"
                age={23}
                hobbies={['Sleep']}
            />
             <p>😵😵😵😵😵</p>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"))