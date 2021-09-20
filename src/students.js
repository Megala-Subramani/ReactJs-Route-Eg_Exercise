import React from "react";
import {Link} from 'react-router-dom'


export default class studentsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datasets : ["Megala","Navtheeb"]
        }
    }
    render(){
        console.log("Students Page [this.props=>]: ",this.props);
        return(<div>Students Page
                        <br></br>
            <br></br>
            <div>
            <div 
                data-one={this.state.datasets[0]} 
                dataTwo={this.state.datasets[1]} 
            ></div>
            </div>
            <Link to="/">Go Back to Home</Link>
        </div>)
    }
}



