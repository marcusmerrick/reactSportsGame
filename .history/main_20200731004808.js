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
        this.shotSound.play()

        if(Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            }, 100)
            
        }

        this.setState((state, props) => ({
            shots: state.shots +1,
            score
        }))
    }
    render() {
        let shotPercentageDiv
        if (this.state.shots) {
        const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
        shotPercentageDiv = (
            <div>
                <strong>Shooting %: {shotPercentage}</strong>
            </div>
        )
        }

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

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

class Game extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            homeTeamStats = {
                shots: 0,
                score: 0,
            },
            visitingTeamStats = {
                shots: 0,
                score: 0,
            }
        }
        
    }
    
    render() {
        return (
            <div className='Game'>
                <h1>Welcome to {props.venue}</h1>
                <div className="stats">
            <Team 
                    name={props.visitingTeam.name} 
                    logo={props.visitingTeam.logoSrc}
                    stats={this.state.visitingTeamStats}
                />

                <div className="versus">
                    <h1>VS</h1>
                </div>
                
                <Team 
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc} 
                    stats={this.state.homeTeamStats}
                />
                </div>
            </div>
        )
    }
}

// Deafault App component that all other compents are rendered through
function App(props){
    const covid = {
        name: 'Covid 19s',
        logoSrc: "./assets/images/team1.jpg",
    }
    const heros = {
        name: 'Corporate Heros',
        logoSrc: "./assets/images/team2.jpg",
    }
    const nih = {
        name: 'NIH',
        logoSrc: "./assets/images/NIH.jpg",
    }
    const mutation = {
        name: 'Mutations',
        logoSrc: "./assets/images/mutation.png"
    }


    return (
      <div className="App">
          <Game 
            venue="Johns Hopkins" 
            homeTeam={covid}
            visitingTeam={heros}
          />
          <Game 
          venue="The Mayo Clinic" 
          homeTeam={nih}
          visitingTeam={mutation}
          />
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );