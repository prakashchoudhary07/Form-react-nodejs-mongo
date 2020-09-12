import React, { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    file: '',
    fileData: ''
  });


  const handelFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value })
  }
  const handelLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value })
  }
  const handelemailIdInputChange = (event) => {
    setValues({ ...values, emailId: event.target.value })
  }
  const handelphoneNumberInputChange = (event) => {
    setValues({ ...values, phoneNumber: event.target.value })
  }
  const handelfileInputChange = (event) => {
    let fileReader = new FileReader();
    
    setValues({ ...values, file: event.target.value });
    
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = (e) => {
      setValues({ ...values, fileData: e.target.result });
    }

  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    const URL = 'http://localhost:5000/form';
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    };
    const request = new Request(URL,requestOptions);
    fetch(request)
    .then(response => response)
    .then(response => response)
    .catch(console.error('There is some problem with the server'));
    
  }

  return (
    <div className="container">
      <form className="data-form" onSubmit={handelSubmit}>
        <input className="form-field" type="text" name="firstName" value={values.firstName} onChange={handelFirstNameInputChange} required placeholder="First name" />
        <input className="form-field" type="text" name="LastName" value={values.lastName} onChange={handelLastNameInputChange} required placeholder="Last name" />
        <input className="form-field" type="email" name="email" value={values.emailId} onChange={handelemailIdInputChange} required placeholder="Email Id" />
        <input className="form-field" type="text" name="phoneNumber" values={values.phoneNumber} onChange={handelphoneNumberInputChange} required placeholder="Phone number" />
        <label htmlFor="uploadFile" className="upload-file">Upload Image:
        <input type="file" name="uploadFile" value={values.file.name} onChange={handelfileInputChange} required />
          <button className="form-field btn-submit" type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}

export default App;
