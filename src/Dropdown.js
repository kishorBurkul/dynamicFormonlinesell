import React from 'react'

const Dropdown = ({ label, value, onChange }) => {
  return (
    <div>
    <label>{label}</label>
    {/* <input type="text" value={value} onChange={(e) => onChange(e.target.value)} /> */}
    <label for="cars">Choose a car:</label>

<select name="cars" id="cars" value={value} onChange={(e) => onChange(e.target.value)}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
  </div>
  )
}

export default Dropdown