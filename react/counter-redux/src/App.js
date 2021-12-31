import './App.css';
import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';


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

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }
  
  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'});
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
          <ButtonDec onClick={this.decrement}/>
          <Counter value={this.props.count}/>
          <ButtonInc onClick={this.increment}/>
        </CenteredFlexDiv>
        <CenteredFlexDiv>
          {this.props.count % 10 === 0 ? <p>Ei, um múltiplo de 10</p> : <p></p>}
        </CenteredFlexDiv>
      </div>
    );  
  }
}

function mapStateToProps(state){
  return {
    count: state.count,
  };
}

const CenteredFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  `;

export default connect(mapStateToProps)(Container);
