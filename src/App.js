import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";



function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    console.log("this.state.currentScore");
    //scenario: clicking the last card
    // means: current score is 11
    // then we do operations
    if (this.state.currentScore === 11) {
      this.setState({
        currentScore: 12,
        topScore: 12,
        rightWrong: "I expected nothing less from a true Saiyan!"
      })
      return
    }

    const newScore = this.state.currentScore +1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Keep going, you're power is almost over 9000!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Never send a boy to do a MAN'S job!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    const { currentScore, topScore, friends, rightWrong } = this.state;
    console.log("this.state.currentScore", rightWrong);

    return (
      <Wrapper>
        <Nav
          title="DBZ Clicky Game"
          score={currentScore}
          topScore={topScore}
          rightWrong={rightWrong}
        />

        <Title>

          Only click on each character once, or else you will be decimated!
          
        </Title>

        <Container>
          <Row>
            {friends.map((friend, idx) => (
              <Column size="md-3 sm-6" key={idx}>
                <FriendCard
                  key={idx}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;