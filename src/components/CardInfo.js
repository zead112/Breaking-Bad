import React, { Component } from "react";

class CardInfo extends Component{
   render(){
    return(
        <div className="col-md-4 col-sm-6 border">
    <div style={{maxWidth:'100%' ,maxHeight:'100%'}} className="card bg-dark text-white" >
        <div style={{maxWidth:'100%' ,maxHeight:'100%'}} className="card-header">
            <img style={{maxWidth:'100%' ,maxHeight:'100%'}} src={this.props.img} alt="member"/>
    </div>
    
    <div   className="card-body" style={{backgroundColor: this.props.email ? 'black' : 'white'}}>
    <h1 >{this.props.name}</h1>
    <p >Nick name : {this.props.nick}</p>
    <p >Phone : {this.props.pohne}</p>
    <p >Email : {this.props.email}</p></div>
    
    
    </div>
    </div>
        
        );
   }
}
export default CardInfo 