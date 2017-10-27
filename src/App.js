import React, { Component } from 'react'
import Staricon from 'react-icons/lib/fa/star'
import _range from 'lodash/range'
import './App.css'

const Stars = props => {
  //const numberOfStars = 1 + Math.floor(Math.random()*9) // Managed in state to prevent rendered
  // let stars = [];
  // for(let i=0; i<numberOfStars; i++){
  //   stars.push(<Staricon key={i} className="star" />)
  // }
  return (
    <div className="col-5">
    {_range(props.numberOfStars).map(i =>
      <Staricon key={i} className="star" />)}
    </div>
  )
}
const Button = props => {
  return (
    <div className="col-2 center-block">
      <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  )
}
const Answer = props => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
      <span key={i}
           onClick={() => props.unselectNumber(number)}>
        {number}
      </span>)}
    </div>
  )
}

 const Numbers = props => {
   const numberClassName = number => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected"
    }
   } //handles selectedNumbers class change

    return(
      <div className="card text-center">
        <div>
          {Numbers.list.map((number, i) =>
            <span key={i}
                  className={numberClassName(number)}
                  onClick={() => props.selectedNumber(number)}>
              {number}
            </span>
          )}
        </div>
      </div>
    )
 }

Numbers.list = _range(1,10) // this is the same thing as using a forloop the lodash way

class Game extends Component {
  state={
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9)
  }
  selectedNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >=0 ) {
      return
    } // This prevent  the selected Number from being clicked again
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers:prevState.selectedNumbers
                               .filter(number => number !== clickedNumber)
    }))
  }
  render() {
    const { selectedNumbers, randomNumberOfStars } = this.state
    return(
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
                 selectedNumber={this.selectedNumber} />
      </div>
    )
  }
}
class App extends Component{
  render() {
    return(
      <div>
        <Game />
      </div>
    )
  }
}

export default App
