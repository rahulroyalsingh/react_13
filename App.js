import logo from './logo.svg';
import './App.css';
import Student from './Student'
import React from 'react'
class App extends React.Component{
   constructor()
   {
      super();
      this.state={
         name:"Rahul"
      }
   }
   render()
   {
      return(
         <div className="App">
            <h1>Props !</h1>
            <Student name="Rahul" email="Rahul@aol.com"></Student>
           <button onclick={()=>this.setState({name:"royal"})}>Update Name</button>
         </div>
      );
   }
}
export default App;