class Team extends React.Component {
    render() {
        return (
            <div className="Team">
                Team
            </div>
        )
    }
}

// Deafault App component that all other compents are rendered through
function App(props){
    return (
      <div className="App">
          <Team name="Russiaville Raccoons" logo />
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );