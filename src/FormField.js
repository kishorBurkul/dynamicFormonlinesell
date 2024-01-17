// FormField.js

import React from 'react';

const FormField = ({ index, field, onChange, onRemove, onAdd, onTypeAdd }) => {
    const handleFieldChange = (e) => {
        onChange(index, { ...field, [e.target.name]: e.target.value });
    };

    return (
        <div class="bg-gray-200 w-100 flex items-center justify-center">

            <div class="mb-4">

                <label className="block text-gray-700 text-sm font-bold w-full">
                    Full Name
                </label>

                {/* <input
                    type="text"
                    name="label"
                    value={field.label}
                    onChange={handleFieldChange}
                    className="border w-100 border-gray-300 p-2 "
                /> */}
                {/* Additional logic for rendering input, textarea, dropdown, etc. based on field type */}
                {/* Implement your custom logic based on the field type */}
                {/* You can create separate components for different field types */}
                {/* For simplicity, we're handling text and textarea here */}
                {field.type === 'text' && (
                    <input
                        type="text"
                        name="value"
                        placeholder="Enter text..."
                        className="border border-gray-300 p-2  ml-2 w-70"
                    />
                )}



                {field.type === 'textarea' && (
                    <textarea
                        name="value"
                        placeholder="Enter textarea..."
                        className="border border-gray-300 p-2 mt-2 w-100"
                    ></textarea>
                )}
                {/* Add logic for other field types (dropdown, checkbox, radio button) */}
                {/* Display options for dropdown */}
                {field.type === 'dropdown' && (
                    <>
                        <label className="block text-gray-700 text-sm font-bold mt-2">
                            Options (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="options"
                            placeholder="Option1, Option2, Option3"
                            value={field.options || ''}
                            onChange={handleFieldChange}
                            className="border border-gray-300 p-2 w-100"
                        />
                    </>
                )}
                {/* Additional logic for checkbox and radio button */}
                {/* Implement your custom logic for checkbox and radio button */}

                {field.type === '' ? (
                    <div>
                        <input type="checkbox" id="vehicle1" name="value" />
                        <label for="vehicle1"> I have a bike</label>
                        <input type="checkbox" id="vehicle2" name="value" />
                        <label for="vehicle2"> I have a car</label>
                    </div>
                ) : ""}
                {field.type === 'radio' && (
                    <input
                        type="radio"
                        name="value"
                        className="mt-2"
                    />
                )}
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
                    onClick={() => onRemove(index)}
                >
                    Remove Field
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-2"
                    onClick={onAdd}
                >
                    Add Form Field
                </button>
            </div>

            {/* <div class="mb-4">

                <label className="block text-gray-700 text-sm font-bold w-full">
                   Address
                </label>
            

            {field.type === 'textarea' && (
                <textarea
                    name="value"
                    placeholder="Enter textarea..."
                    className="border border-gray-300 p-2 mt-2 w-100"
                ></textarea>
            )}

            <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2"
                onClick={() => onRemove(index)}
            >
                Remove Field
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-2"
                onClick={onTypeAdd}
            >
                Add Form Field
            </button>
            </div> */}
        </div>


    );
};

export default FormField;
