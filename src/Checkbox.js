import React from 'react'

const Checkbox = ({ label, value, onChange }) => {
  return (
//     <div>
//     <label>{label}</label>
//     <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
//   </div>   

<>
<div>
<input type="checkbox" id="vehicle1" name="vehicle1"  value={value} onChange={(e) => onChange(e.target.value)}/>
  <label for="vehicle1"> I have a bike</label>
  <input type="checkbox" id="vehicle2" name="vehicle2"  value={value} onChange={(e) => onChange(e.target.value)}/>
  <label for="vehicle2"> I have a car</label>
</div>
</>
  )
}

export default Checkbox