function Trailer({ movieID, toggleShowModal }) {
  const trailerRef = React.useRef();
  function setTrailerHeight() {
    const trailerWidth = trailerRef.current.offsetWidth;
    trailerRef.current.style.height = `${trailerWidth}px`;
  }
  React.useLayoutEffect(() => {
    setTrailerHeight();
  });
  React.useEffect(() => {
    window.addEventListener('resize', setTrailerHeight);
    return () => {
      window.removeEventListener('resize', setTrailerHeight);
    };
  });
  return (
    <>
      <Backdrop bgColor="rgba(0, 0, 0, .6)" handleClick={toggleShowModal} />
      <iframe
        className="trailer"
        ref={trailerRef}
        src={`https://www.youtube.com/embed/${movieID}`}></iframe>
    </>
  );
}
