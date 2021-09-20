import React from 'react';
import './Course.css'

export default class courseComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list : ["C#","C++" ,"Javascript" ,"HTML" ,"CSS" , "ReactJS"]
        }
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.props.history.push("/",this.state);
        },3000);
    }
    render(){
        console.log("Course Page [this.props=>]: ",this.props);
        return(<div className="dvClass" >Courses Page
                        <br></br>
            <br></br>
        </div>)
    }
}