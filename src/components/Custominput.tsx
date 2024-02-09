import React from "react";

function CustomInput(props: {
  type: string;
  name: string;
  placeholder?: string;
  classname?: string;
  required?: boolean;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}) {
  const {
    type,
    name,
    placeholder,
    classname,
    required = false,
    value,
    onChange,
    onBlur,
  } = props;
  return (
    <>
      <div>
        <input
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${classname}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </>
  );
}

export default CustomInput;
