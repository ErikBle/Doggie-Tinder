import React from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import Card from "../card";

class DiscoverPage extends React.Component{
    
    state = {
        search: "",
        img: []
}

searchDogs = query => {
    API.search(query)
    .then(res => this.setState({ img: res.data.message }))
    .catch(err => console.log(err));
}

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    this.searchDogs(this.state.search);
  };


render(){
return (
    <div>
    <h1 className="text-center"> Search for Breeds </h1>

    <SearchForm
    value={this.state.search}
    handleInputChange={this.handleInputChange}
    handleFormSubmit={this.handleFormSubmit}
  />

  <Card
        img={this.state.img} 
  />

 </div>

)}



}


export default DiscoverPage;

