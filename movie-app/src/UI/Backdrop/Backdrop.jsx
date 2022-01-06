function Backdrop({ bgColor, handleClick }) {
  return (
    <div
      className="backdrop"
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
      }}></div>
  );
}
