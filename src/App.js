import './App.css';
import React, { Component } from 'react'
import Homepage from './Pages/Homepage';

class App extends Component {

  componentDidMount(){
    window.addEventListener('scroll',this.onScrollListener)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.onScrollListener)
  }

  onScrollListener = (e) =>{
    const navigation = document.querySelector('nav');
    navigation.classList.toggle('window-scroll',window.scrollY > 0)
  }

  render() {
    return (
      <div className="App" onScroll={this.onScrollListener}>
        <Homepage/>
      </div>
    )
  }
}


export default App;
