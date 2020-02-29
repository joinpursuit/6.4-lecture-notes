import React, { useState } from "react";
import { useInput } from '../util/customHooks';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const firstName = useInput("")
  const lastName = useInput("")
  const favoriteFlavor = useInput("chocolate")
 const [agree, setAgree] = useState(false);
 const [pizza, setPizza] = useState("yes");

  const handleAgree = () => setAgree(prevAgree => !prevAgree)

  const history = useHistory(); 
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/people/${firstName.value}`)
    console.log({
      first_name: firstName.value,
      last_name: lastName.value
    });
  };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            {...firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter Your last name"
            {...lastName}
          />
        </label>
        <label>
          Favorite Ice Cream:
          <select
           {...favoriteFlavor}
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
            onChange={(e) => setPizza(e.target.value)}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            value="no"
            name="pizza"
            checked={pizza === "no"}
            onChange={(e) => setPizza(e.target.value)}
          />
        </label>
        <label>
          Agree?
          <input
            type="checkbox"
            checked={agree}
            onChange={handleAgree}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
}

export default Form;
