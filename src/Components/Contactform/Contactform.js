import React from "react";
import { Link } from "react-router-dom";
import Wrapper, { Formcontrol } from "./Contactform.styled";
export default function Contactform() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <Formcontrol>
            <input type="text" placeholder="first name" />
          </Formcontrol>
          <Formcontrol>
            <input type="text" placeholder="last name" />
          </Formcontrol>
        </div>
        <div className="row">
          <Formcontrol>
            <input type="text" placeholder="country" />
          </Formcontrol>
          <Formcontrol>
            <input type="text" placeholder="state / province" />
          </Formcontrol>
        </div>
        <div className="row-2">
          <Formcontrol>
            <input type="text" placeholder="adress" />
          </Formcontrol>
        </div>
        <div className="row-3">
          <Formcontrol>
            <textarea placeholder="state skill testing question?"></textarea>
          </Formcontrol>
        </div>
        <div className="row-4">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            i agree to <Link to="/">terms and condition</Link>
          </label>
        </div>
        <div className="row-5">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </Wrapper>
  );
}
