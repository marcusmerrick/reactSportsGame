class Team extends React.Component {
    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                
            </div>
        )
    }
}

// Deafault App component that all other compents are rendered through
function App(props){
    return (
      <div className="App">
          <Team name="Russiaville Raccoons" 
            logo="./assets/team1.jpg" />
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );