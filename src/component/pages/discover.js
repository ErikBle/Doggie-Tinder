import React, { Component } from "react";
import axios from "axios";
import Card from "../card";

const styles = {
    button: {
        width: "200px",
     }}

class DiscoverPage extends Component{

    
    state = {
        friends: 0,
        img: ""
    }

    // Gets random image
    getImg(){
    axios.get("https://dog.ceo/api/breeds/image/random").then(res =>
        this.setState({img: res.data.message})
    )
    
    }


    // Auto loads image upon landing at page
    componentDidMount(){
        this.getImg();
    }

    //Calcultates the odds, 1 in 5 chance
    connectionOdds(){
        const odds = Math.floor(Math.random() * 5) + 1;
        if (odds === 1) {
            return this.setState({
                friends: this.state.friends + 1
            })
        }
    }

    // When either button is pressed
    handleLike = event => {
        event.preventDefault();
        if(event.target.id === "likeBtn"){
            // Like button is clicked
            this.connectionOdds();
            this.getImg();
        } 
        // Dislike is clicked
        else {
            this.getImg();
        }
        
    }
   
render(){
    return (
    
        <div>
        <h1 className="text-center"> Doggie Tinder Time!</h1>
          <Card
          img={this.state.img} 
        />
        <div>
        <div className="col text-center">
        <button id="likeBtn" onClick={this.handleLike} style={styles.button} className="btn btn-primary">Like</button>
        <button id="dislikeBtn" onClick={this.handleLike} style={styles.button} className="btn btn-secondary">Nope</button>
        </div>
        </div>
         <h2 className="text-center">You have matched with {this.state.friends} dogs</h2>
        </div>
     
    )
}



}
export default DiscoverPage;