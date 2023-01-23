import React, { Component } from "react";
import CardInfo from "./CardInfo";
import info from "./info";

class Card extends Component{
  constructor(){
    super()
    this.state = { info: info ,
      cardmembers:[],
      counter:0,
}
this.clickEvent=this.clickEvent.bind(this)
  }

  clickEvent(){
    if(this.state.counter< this.state.info.length){

      this.state.cardmembers.push(this.state.info[this.state.counter]) ;
this.setState(function(prevState){
  return{counter:prevState.counter+1}
});

this.newMembers= this.state.cardmembers.map(member=>{
  return<CardInfo
  key={member.id}
  img = {member.img}
  name={member.name}
  nick={member.nick}
  pohne={member.pohne}
  email={member.email} 
/>
})
    }

}
  
 
render(){
  return(
<div className="row">
  <button className="btn btn-primary btn lg btn-block" onClick={this.clickEvent}>click me!</button>
{this.newMembers}
</div>
  );}

}
export default Card