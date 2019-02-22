import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id':'whwk528',
    'image':'https://placeimg.com/64/64/1',
    'name': '김동현',
    'birthday':'910605',
    'gender':'남자',
    'job':'프로그래머'
  },
  {
    'id':'1318dnjs',
    'image':'https://placeimg.com/64/64/2',
    'name': '강상원',
    'birthday':'910605',
    'gender':'남자',
    'job':'배송기사'
  },
  {
    'id':'3',
    'image':'https://placeimg.com/64/64/3',
    'name': '소나타',
    'birthday':'020101',
    'gender':'남자',
    'job':'폐기물'
  }
]
  
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
      </div>
    );
  }
}

export default App;
