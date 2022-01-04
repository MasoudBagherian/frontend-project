const ITEM__COUNT = 20;
const ANIMATION_DURATION = 1;
const ANIMATION_DELAY_OFFSET = ANIMATION_DURATION / ITEM__COUNT;
function mkLoaderItems(itemCount) {
  const rotationOffset = 360 / itemCount;
  return new Array(itemCount).fill(null).map((item, index) => (
    <div
      className="loader__item"
      key={index}
      style={{
        transform: `rotate(${rotationOffset * (index + 1)}deg)`,
      }}>
      <span
        className="loader__element"
        style={{
          animation: `blink ${ANIMATION_DURATION}s linear ${
            ANIMATION_DELAY_OFFSET * index
          }s infinite alternate`,
        }}></span>
    </div>
  ));
}
function Loader() {
  const loaderItems = mkLoaderItems(ITEM__COUNT);
  return (
    <div className="loader__bg">
      <div className="loader">{loaderItems}</div>
      <p className="loader__text">loading...</p>
    </div>
  );
}
