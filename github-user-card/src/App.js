import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  background: skyblue;
`;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userobject: [],
      followers: []
    }
  }

  getUser = () => {
    axios.get('https://api.github.com/users/TheLessonHere')
    .then(res => {
      console.log(res);
      this.setState({userobject: res.data})
    })
    .catch(err => {
      console.log('Data not available')
    })
  }

  getFollowers = () => {
    axios.get('https://api.github.com/users/TheLessonHere/followers')
    .then(res => {
      console.log(res);
      this.setState({followers: res.data})
    })
    .catch(err => {
      console.log('Data not available')
    })
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  render () {
    return (
      <StyledContainer>
      <UserCard userobject={this.state.userobject}/>
      <FollowersList followerarray={this.state.followers}/>
      </StyledContainer>
    )
  }
}

export default App;
