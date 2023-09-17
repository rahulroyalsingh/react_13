import React from 'react'

export default class Students extends React.Component{
   render()
   {
      console.log(this.props)
      return(
        <div style={{backgroundColor:'lightgreen', margin:25}}>
         <h1>Name: {this.props.name}</h1>
         <h3>{this.props.email}</h3>
         </div>
     )
   }
}