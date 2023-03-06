import React, { useState } from "react";

const AddData = ({handleSubmit}) => {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    handleSubmit(formData)
  }
 
  return (
    <div>
      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          required
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          onChange={handleChange}
          required
          name="email"
          placeholder="email"
        />
        <select name="role" id="role"  onChange={handleChange}>
          <option value="">Please select the role</option>
          <option value="admin">Admin</option>
          <option value="member">Member</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddData;
