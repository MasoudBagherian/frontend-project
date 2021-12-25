const headerLogo = Logo({ className: 'logo logo--sm' });
const headerControls = HeaderControls({ className: 'header__controls' });
function Header(props) {
  return React.createElement('div', props, headerLogo, headerControls);
}
