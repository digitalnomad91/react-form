import react from "react";


<div className="create">
    <h2> Customer Form</h2>
    <form>
        <label> Customer Name:</label>
        <input
        type="text"
        name='username'
        placeholder="Username"
        required
        />

        <label>Email:</label>
        <input
        type="text"
        name='email'
        placeholder="Email"
        required
        />
        <label>Zip Code</label>
        <input
        type="text"
        name='zipCode'
        placeholder="Zip Code"
            required
        />
        <button>Submit</button>
    </form>


</div>

