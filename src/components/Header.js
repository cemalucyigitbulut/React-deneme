import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title , onAdd , showAdd}) => {
  // const onClick = () => {
  //   console.log("Tikla");
  // };

  return (
    <header className="header">
      {/* <h1 style={{ color:'red', backgroundColor:'black' }}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Something",
};

// Header.propTypes ={
//     title: PropTypes.string.isRequired,
// }

// Css in JS
// const headingStyle ={
//     color:'red', backgroundColor:'black'
// }

export default Header;
