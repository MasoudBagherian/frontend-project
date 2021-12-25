const header = Header({ className: 'header' });
const profile = Profile({ className: 'profile' });
function App(props) {
  return React.createElement('div', props, header, profile);
}
