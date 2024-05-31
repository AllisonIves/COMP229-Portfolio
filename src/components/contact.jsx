import { useState } from "react";

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
    <div >
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
        <label>First name:
        <input 
          type="text" 
          name="firstName" 
          value={inputs.firstName || ""} 
          onChange={handleChange}
          style={{float:"right"}}
        />
        </label>
        <label>Last name:
        <input 
          type="text" 
          name="lastName" 
          value={inputs.lastName || ""} 
          onChange={handleChange}
          style={{float:"right"}}
        />
        </label>
        <label>Phone number:
          <input 
            type="text" 
            name="phoneNumber" 
            value={inputs.phoneNumber || ""} 
            onChange={handleChange}
            style={{float:"right"}}
          />
          </label>
          <label>Email:
          <input 
            type="text" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
            style={{float:"right"}}
          />
          </label>
          <label>Message:
          <input 
            type="textarea" 
            name="message"
            value={inputs.message || ""} 
            onChange={handleChange}
            style={{height:"4em",width:"97%"}}
          />
          </label>
          <input type="submit" style={{backgroundColor:"#e6d2ff"}}/>
      </form>
      </div>
    )
  }
  

export default function Contact() {
    return(
    <>
    <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{backgroundColor:"#e6d2ff", marginRight:"1em", padding:"0.75em"}}>
            <h2>Contact Me</h2>
            <p>Allison Ives</p>
            <p>Email: AIves1@my.centennialcollege.com</p>
            <p>GitHub: <a href="https://github.com/AllisonIves">Allison Ives</a></p>
        </div>
        <div style={{marginLeft:"1em"}}>
            <h3>Message Form</h3>
        <MyForm/>
        </div>
    </div>
    </>
    );
};
