import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    agree: false,
    favoriteFlavor: "chocolate",
    pizza: "yes"
  };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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

    console.log({
      first_name: firstName,
      last_name: lastName
    });
  };

  render() {
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
