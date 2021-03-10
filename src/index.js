import React, { Component } from "react";
import {render} from "react-dom";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        console.log("User Clicked");
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.clicked()}>Click Me</button>
            </div>
        )
    }
}

render(<App/>, document.getElementById("root"));