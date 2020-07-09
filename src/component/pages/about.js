import React, { Component } from "react";
import axios from "axios";
import Card from "../card";

class AboutPage extends Component{

    state ={
        img:""
    }

    getImg(){
        axios.get("https://dog.ceo/api/breeds/image/random").then(res =>
            this.setState({img: res.data.message})
        )}
    
    componentDidMount(){
            this.getImg();
        }

render(){
    return (
        <div>
            <h1 className="text-center">Dog Tinder</h1>
            <h2 className="text-center"> Do you have what it takes to get a date with one of these beauties?</h2>
            <Card
          img={this.state.img} 
        />
            <h3 className="text-center">Click the "Tinder Time" button to begin</h3>
        </div>
    )}
}
export default AboutPage;