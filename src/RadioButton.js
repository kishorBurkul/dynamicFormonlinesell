import React from 'react'

 const RadioButton = ({ label, value, onChange }) => {
  return (
    <>
      <div>
    {/* <label>{label}</label>
    <input type="radio" value={value} onChange={(e) => onChange(e.target.value)} /> */}

   <input type="radio" id="html" name="fav_language" value={value} onChange={(e) => onChange(e.target.value)}/>
  <label for="html">HTML</label>
  <input type="radio" id="css" name="fav_language" value={value} onChange={(e) => onChange(e.target.value)}/>
  <label for="css">CSS</label>



  </div>
  </>
  
  )
}
export default RadioButton
