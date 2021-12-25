function Button(props) {
  return (
    <button className={props.btnClass} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}
Button.propTypes = {
  btnClass: PropTypes.string,
  handleClick: PropTypes.func,
};
