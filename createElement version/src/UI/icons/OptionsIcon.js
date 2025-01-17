const optionsIconPath = React.createElement('path', {
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '2',
  d: 'M19 9l-7 7-7-7',
});
function OptionsIcon() {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    children: optionsIconPath,
  });
}
