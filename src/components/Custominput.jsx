// const Custominput = (props) => {
//   const { type, name, placeholder, className, value, onChange, onBlur } = props;

//   return (
//     <div>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         className={`form-control ${className}`}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//       />
//     </div>
//   );
// };

// export default Custominput;

function CustomInput(props) {
  const { type, name, placeholder, classname, value, onChange, onBlur } = props;
  return (
    <>
      <div>
        <input
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
