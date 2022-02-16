const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="Ted" />
    </div>
  )

  ReactDOM.render(<App />, document.getElementById("root"))