import React from 'react';
import './App.css';

class App extends React.Component {

  // state = {
  //   dogs: [],
  //   breed: "boxer"
  // }

  state = {
    login: '',
    name: '',
    avatar_url: '',
    location: ''
  }
  
  componentDidMount() {
    fetch('https://api.github.com/users/tarmes')
      .then(res => res.json())
      .then(userData => {
        this.setState({
          login: userData.login,
          name: userData.name,
          avatar_url: userData.avatar_url,
          location: userData.location
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>THIS IS THE APP</h1>
      </div>
    )
  }
}

export default App;
