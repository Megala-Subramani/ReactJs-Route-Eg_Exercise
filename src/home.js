import React from 'react';

export default class homeComponent extends React.Component{
    render(){
        console.log("Home Page [this.props=>]: ",this.props);
        return(<div>Home Page <br></br><br></br>
            {JSON.stringify(this.props)}
        </div>)
    }
}