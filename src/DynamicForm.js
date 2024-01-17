// DynamicForm.js
import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';

const fieldComponents = {
  text: TextInput,
  textarea: TextArea,
  dropdown: Dropdown,
  checkbox: Checkbox,
  radio: RadioButton,
};

const DynamicForm = ({ fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        const FieldComponent = fieldComponents[field.type];
        return (
          <FieldComponent
            key={field.name}
            label={field.label}
            value={formData[field.name] || ''}
            onChange={(value) => handleChange(field.name, value)}
            options={field.options}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
