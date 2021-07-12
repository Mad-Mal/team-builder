import React from 'react'

const Form = () => {
    return (
        <div className="formContainer">
            <form>
                <label htmlFor="nameInput">Name</label>
                <input
                maxLength="20"
                placeholder="Name"
                id="nameInput"
                name="fullName"
                type="text"
                /><br />
                <label htmlFor="emailInput">Email</label>
                <input
                maxLength="30"
                placeholder="Email"
                id="emailInput"
                name="email"
                type="text"
                /><br />

                <label htmlFor='roleSelect'>Role</label>
                <select id='roleSelect' name='roles' placeholder=''>
                    <option value='1'>Frontend Dev</option>
                    <option value='2'>Backend Dev</option>
                    <option value='3'>Fullstack Dev</option>
                    <option value='4'>Manager</option>
                    <option value='5'>Other</option>
                </select>
            </form>
            <button id='addButton'>Add</button>
        </div>
    )
}

export default Form
