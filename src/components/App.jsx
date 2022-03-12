import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function update(event) {
    const { value, name } = event.target;
    setFullname((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullname.fName} {fullname.lName} {fullname.email}
      </h1>
      <form>
        <input
          name="fName"
          onChange={update}
          placeholder="First Name"
          value={fullname.fName}
        />
        <input
          name="lName"
          onChange={update}
          placeholder="Last Name"
          value={fullname.lName}
        />
        <input
          name="email"
          onChange={update}
          placeholder="Email Id"
          value={fullname.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
