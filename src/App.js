// App.js

import React, { useState } from 'react';
import FormField from './FormField';
import TextAreaField from './TextAreaField';

const App = () => {
  const [formFields, setFormFields] = useState([
    // {type:'text' , label:''},
    // {type:'dropdown', label:''},
    // {type:'radio', label:''},
    // {type:'checkbox', label:''},
    // {type:'email',label:''}
    { name: '', lastname: '', country: '', state: '', city: '', gender: '',email:'',address:'',idproof:[]}
  ]);

  const [error , setError] = useState({});

  const handleFormchange = (event, index) => {
    const data = [...formFields]
    data[index][event.target.name] = event.target.value
    setFormFields(data);
    // console.log(index,event.target.value)

  }

  const handleRadioChange = (event)=>{

    setFormFields([{
      ...formFields,
      gender: event.target.value,
    }])

  }

  const handlesubmit = (e) => {
   e.preventDefault();
    //setFormFields([...FormField])
    const validationError = validateForm(formFields)
    console.log("filed",Object.keys(validationError))
    if (Object.keys(validationError).length > 0) {
     
      console.log('Form submitted:', formFields);
    } else {
      
      setError(validationError);
    }
    }


  const validateForm = (data)=>{

    const error = {}
    if(!data.name){
    error.name="Name is required"
    }

    if(!data.lastname){
      error.lastname = "LastName is required"
    }
    if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)){
      error.email = "Email is required"
    }
    if(!data.country){
      error.country = "Country is required"
    }
    if(!data.address){
      error.address ="Address is required"
    }
    if(!data.city){
      error.city = "City is required"
    }
    if(!data.state){
      error.state = "State is required"
    }
    return error;
  }




  const addField = () => {

    const obj = {
      name: '',
      lastname: '',
      gender: '',
      country: '',
      state: '',
      city: '',
      email:'',
      address:'',
      idproof:''

    }
    setFormFields([...formFields, obj])

  }

  const removeField = (index) => {

    const data = [...formFields]
    data.splice(index, 1)
    setFormFields(data)


  }

  // const addFormField = () => {
  //   setFormFields([...formFields, { type: 'text' ,  label: '' }]);
  // };

  // const addTextareaFiled = ()=>{
  //   setFormFields([...formFields ,{type :'checkbox', label:''}])
  // }

  // const removeFormField = (index) => {
  //   const updatedFields = [...formFields];
  //   updatedFields.splice(index, 1);
  //   setFormFields(updatedFields);
  // };

  // const handleFieldChange = (index, field) => {
  //   const updatedFields = [...formFields];
  //   updatedFields[index] = field;
  //   setFormFields(updatedFields);
  // };

  // const handleSubmit = () => {
  //   // Implement form submission logic here
  //   console.log('Form submitted:', formFields);
  // };

  return (
    <div className="container mx-auto p-4  ">
      <h1 className="text-2xl text-center text-cyan-400">Dynamic Form Builder</h1>


      {/* {formFields.map((field, index) => (
        <FormField
          key={index}
          index={index}
          field={field}
          onChange={handleFieldChange}
          onRemove={removeFormField}
          onAdd ={addFormField}
          onTypeAdd = {addTextareaFiled}
        />
      ))} */}

      {/* {formFields.map((field , index)=>(
        <TextAreaField
        
        key={index}
        index={index}
        field={field}
        onChange={handleFieldChange}
        onRemove={removeFormField}
        onAdd={addTextareaFiled}

        />
      ))} */}


      <div >
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4"  onClick={addField}  > Add Form Field </button>
        <form onSubmit={handlesubmit}>
          {formFields.map((form, index) => {
            return (<>
              <div key={index} class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-2">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                  <div class="mt-2">
                    <input type="text" name="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={form.name}
                      onChange={event => handleFormchange(event, index)}

                    />
                  </div>
                  {error.name && <p className='error text-red-500'>{error.name}</p> }
                </div>



                <div class="sm:col-span-2">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                  <div class="mt-2">
                    <input type="text" name="lastname" required
                      value={form.lastname}
                      onChange={event => handleFormchange(event, index)}

                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  {error.lastname && <p className="error text-red-500">{error.lastname}</p>}
      
                </div>



               
                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" required autocomplete="email"
                    value={form.email}
                    onChange={event =>handleFormchange(event , index)}
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  {error.email && <p className="error text-red-500">{error.email}</p>}
                </div>

                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                  <div class="mt-2">
                  <textarea type="text" name='address' required  value={form.address} onChange={event => handleFormchange(event, index)}  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></textarea>

                    
                  </div>
                  {error.address && <p className="error text-red-500">{error.address}</p>}
                </div>

                <div class="sm:col-span-2">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                  <div class="mt-2">
                    <input type="radio" id="male" name="gender" value="male" required
                           
                           onChange={event => handleRadioChange(event, index)} />
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender"  value="female" required
                    
                       onChange={event => handleRadioChange(event, index)}  className='ml-10'/>
                    <label for="female">Female</label>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Gov Id Proof </label>
                  <div class="mt-2">
                    <input type="checkbox" name="idproof" value="Adhar Card"
                      onChange={event => handleFormchange(event, index)} required />
                    <label for="idproof">Adhar Card</label>
                    <input type="checkbox"  name="idproof" value="Pan Card" required
                      onChange={event => handleFormchange(event, index)} className='ml-10' />
                    <label for="idproof">Pan Card</label>
                  </div>
                </div>
               
                <div class="sm:col-span-2 sm:col-start-1">
                  <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                  <div class="mt-2">
                    <select id="country" name="country" required  value={form.country} 
                      onChange={event => handleFormchange(event, index)}
                      autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>India</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  {error.country && <p className="error text-red-500">{error.country}</p>}
                </div>



                <div class="sm:col-span-2">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                  <div class="mt-2">
                    <input type="text" name="state" id="region" required autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={form.state}
                      onChange={event => handleFormchange(event, index)}


                    />
                  </div>
                  {error.state && <p className="error text-red-500">{error.state}</p>}
                </div>

                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <div class="mt-2">
                    <input type="text" name="city" id="city" autocomplete="address-level2" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={form.city}
                      onChange={event => handleFormchange(event, index)}

                    />
                  </div>
                  {error.city && <p className="error text-red-500">{error.city}</p>}
                </div>
                <button  onClick={removeField} className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-20" >Remove</button>
              </div>
 </>    )
          })}
          
      <button type='submit' className="bg-green-500 justify-content-center text-white px-4 py-2 rounded mt-4 ml-5">Submit Form</button> 
        </form>
      </div>

      
      
    </div>
  );
};

export default App;
