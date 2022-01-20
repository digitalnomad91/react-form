import {React, useState} from "react";

import FormInput from './components/FormInput'


function App() {

  const initialValues = {username: "", email:"", zipcode:""};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} =  e.target;
    setFormValues({...formValues, [name]: value});
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = validate(formValues);
    setFormErrors(errors);

    if(Object.keys(errors).length !== 0) return false;

    setIsSubmit(true);
    

      //form successfully submitted
      if(Object.keys(errors).length === 0) {
          alert('success');
          const matches = document.querySelectorAll("input");
          [].forEach.call(matches, function(input) {
            // do whatever
            input.value = '';
          });
      }
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const zipCodeRegex = /^\d{5}(-\d{4})?(?!-)$/;

    if(!values.username) {
      errors.username = "Username is required"
    } else if (values.username.length < 3 ) {
      errors.username = " Must be at least 3 characters."
    }
    if(!values.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Must be a valid email. (ex. john@email.com)";
    }
    if(!values.zipcode) {
      errors.zipcode = "ZipCode is required"
    } else if (!zipCodeRegex.test(values.zipcode)) {
      errors.zipcode = "Must be a valid zip code (ex.12345)"
    }
    return errors;
  };


return (
<div className="create">
  {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="message success"> Form was successfully submitted!</div>
) : (
  <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

 )}
  <form onSubmit={handleSubmit}>
    <h2> Customer Form</h2>
     <div className="divider"></div>
      <div className="form">
        <FormInput
          name='username'
          placeholder="Username"
          value= {formValues.username}
          handleChange={handleChange}
          formErrors={formErrors}
          formValues={formValues}
          
        />
        <div className="field">
        <label>Email:</label>
        <input
          type="email"
          name='email'
          placeholder="Email"
          value= {formValues.email}
          onChange={handleChange}
        />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
        <label>Zip Code</label>
        <input
          type="text"
          name='zipcode'
          placeholder="Zip Code"
          value= {formValues.zipcode}
          onChange={handleChange}
        />
        </div>
        <p>{formErrors.zipcode}</p>
        <button>Submit</button>
    </div>
    </form>

    </div>

   );
}



export default App; 