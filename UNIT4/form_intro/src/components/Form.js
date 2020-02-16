import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    agree: false,
    favoriteFlavor: "chocolate",
    pizza: "yes"
  };

//   handleFirstNameChange = e => {
//     this.setState({ firstName: e.target.value });
//   };

//   handleLastNameChange = e => {
//     this.setState({ lastName: e.target.value });
//   };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

//   handleFlavorChange = e => {
//     this.setState({ favoriteFlavor: e.target.value });
//   };

//   handlePizza = (e) => {
//     this.setState({ pizza: e.target.value })
//   }

  handleAgree = () => {
    this.setState(prevState => {
      return {
        agree: !prevState.agree
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { firstName, lastName } = this.state;
    //What we would send in post request with axios. Then 
    //navigate to different page 
    console.log({
      first_name: firstName,
      last_name: lastName
    });
  };

  render() {
    // console.log(this.state);
    let { firstName, lastName, agree, favoriteFlavor, pizza } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter Your last name"
            value={lastName}
            name="lastName"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Favorite Ice Cream:
          <select
            value={favoriteFlavor}
            name="favoriteFlavor"
            onChange={this.handleChange}
          >
            <option value="vanilla">vanilla</option>
            <option value="strawberry">strawberry</option>
            <option value="chocolate">Chocolate</option>
          </select>
        </label>
        Plain Pizza?
        <label>
          Yes
          <input
            type="radio"
            value="yes"
            name="pizza"
            checked={pizza === "yes"}
            onChange={this.handleChange}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            value="no"
            name="pizza"
            checked={pizza === "no"}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Agree?
          <input
            type="checkbox"
            checked={agree}
            onChange={this.handleAgree}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
