
const formInput = (props) => {
    return (
      <div>
        <div className="field">
         <label> Customer Name:</label>
         <input
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          value= {props.formValues.username}
          onChange={props.handleChange}
         />
         </div>
         <p>{props.formErrors[props.name]}</p>
      </div>
    );
}

export default formInput