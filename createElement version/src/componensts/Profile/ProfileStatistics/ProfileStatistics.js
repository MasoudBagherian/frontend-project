function ProfileStatistics(props) {
  const heading = React.createElement('h3', {
    className: 'heading',
    children: props.quantity,
  });
  const key = React.createElement('p', {
    className: 'key',
    children: props.tag,
  });
  return React.createElement('div', props, heading, key);
}
