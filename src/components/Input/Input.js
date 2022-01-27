import React, { Component } from 'react'
import axios from 'axios'

export class Input extends Component {
    constructor() {
        super()
    
        this.state = {
             message: ''
        }
    }
    
    saveMessage = (event) =>{
         event.preventDefault();

        axios.post("/save").then(request=>{
            console.log(request)
        })


         this.setState({
             message: 'Thank you! Your message has been sent.'
         })
    }

    render() {
        return (
            <div>
                <h2>Any message for me?</h2><br/>
                
                    <form method="post">
                    <input type="text" name= "message" placeholder= "Type your message here.."/>
                    <input type="text" name= "identity" placeholder= "Your Identity (ex-name)"/>
                    
                    <br/><br/>
                    <button onClick={this.saveMessage}>Send</button>
                    </form>

                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default Input
