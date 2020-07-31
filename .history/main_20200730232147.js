class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0,
        }
    }

    shotHandler = () => {
        let score = this.state.score
        if(Math.random() > 0.5) {
            score += 1
        }

        this.setState((state, props) => ({
            shots: state.shots +1,
            score
        }))
    }
    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div> 
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

// Deafault App component that all other compents are rendered through
function App(props){
    return (
      <div className="App">
          <div 
          <Team name="Covid 19s" 
            logo="./assets/team1.jpg" />
            
            <Team name="Corporate Heros" 
            logo="./assets/team2.jpg" />
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );