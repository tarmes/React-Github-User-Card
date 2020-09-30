import React from 'react';
import './App.css';
import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {

  state = {
    login: '',
    name: '',
    avatar_url: '',
    location: '',
    followers: []
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
      fetch('https://api.github.com/users/tarmes/followers')
      .then(res => res.json())
      .then(followerData => {
        this.setState({
          followers: followerData
        })
        console.log(this.state.followers)
        })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.login}</h1>
        <UserCard userData={this.state}/>
        {/* <Followers followers={this.state.followers}/> */}
        <div>
          <h1>THESE ARE MY FOLLOWERS</h1>
          {this.state.followers.map(follower => (
                <div key={follower.id} className='follower'>
                    <h1>{follower.login}</h1>
                    <img 
                    src={follower.avatar_url} 
                    alt={follower.login} /> 
                </div>
            ))}
        </div>
      </div>
    )
  }
}

export default App;
