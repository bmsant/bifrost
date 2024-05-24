"use client";

import React, { useState, FormEvent } from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

interface FormField {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: { [key: string]: any }) => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col">
          {field.label && (
            <label htmlFor={field.name} className="mb-2 text-gray-700">
              {field.label}
            </label>
          )}
          <InputField
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            id={field.name}
            onChange={handleChange}
          />
        </div>
      ))}
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
