import './App.css';
import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  border-radius: 30px;
`;

function ButtonInc (props) {
    return(
      <Button id="btn-inc" onClick={props.onClick}>+</Button>
    );
  };

  function ButtonDec (props) {
    return(
      <Button id="btn-dec" onClick={props.onClick}>-</Button>
    );
  };

const StyledCounter = styled.h1`
  padding-left: 20px;
  padding-right: 20px;
`;

function Counter (props) {

  return (
    <StyledCounter>{props.value}</StyledCounter>
  );
};

class Container extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick(mode){
    switch (mode){
      case 0:
        this.setState(
          {
            count: this.state.count + 1
          }
        );
        
        break;
      case 1:
        this.setState(
          {
            count: this.state.count - 1
          }
        );
        break;
      default:
        console.log("Invalid state");
        break;
    }
  }

  

  render(){
    return(
      <div>
        <CenteredFlexDiv>
          <ButtonDec onClick={() => this.handleClick(1)}/>
          <Counter value={this.state.count}/>
          <ButtonInc onClick={() => this.handleClick(0)}/>
        </CenteredFlexDiv>
        <CenteredFlexDiv>
          {this.state.count % 10 === 0 ? <p>Ei, um múltiplo de 10</p> : <p></p>}
        </CenteredFlexDiv>
      </div>
    );  
  }
}

const CenteredFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  `;



function App() {
  return (
    <Container />
  );
}


export default App;
