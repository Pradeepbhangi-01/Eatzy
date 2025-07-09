import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Pradeepbhangi-01");
    const userData = await data.json();
    // console.log("userData ", userData);
    console.log("componentDidMount");

    this.setState(userData);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, bio, avatar_url, company } = this.state;

    console.log(this.state);
    return (
      <div className="user-card">
        <img alt="user-profile" src={avatar_url} width="10%"></img>
        <h2>Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h3>Location : {location}</h3>
        <h3>Company : {company}</h3>
        <h3></h3>
      </div>
    );
  }
}

export default UserClass;
