export default {
  option: (provided, state) => ({
    // Menu Item 
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "rgba(154, 154, 240, 1)",
  }),
  container: (base, props) => ({
      ...base,
      backgroundColor: "transparent",
      outline: "none",
  }),
  input: (base, props) => ({
  // Input Color
      ...base,
      color: "white",
      padding: 11
  }),
  singleValue: (base, props) => ({
  // Input Color
      ...base,
      color: "white",
  }),
  multiValueLabel: (base, props) => ({
    // Selected Value Color
      ...base,
      color: "white",
    outline: "none"

  }),
  multiValue: (base, props) => ({
      ...base,
      backgroundColor: "rgba(154, 154, 240, 0.2)",
      outline: "none",

  }),
  menu: (base, props) => ({
    ...base, 
    backgroundColor: "rgba(39, 39, 39, 0.9)", 
    zIndex: '999', 
    border: "1px solid rgba(255, 255, 255, 0.1)",
    outline: "none",


  }),
  control: (base, props) => ({
    ...base, 
    backgroundColor: "transparent",
    outline: "1px solid transparent",
    border: "2px solid rgba(154, 154, 240, 0.1)",
  })
};