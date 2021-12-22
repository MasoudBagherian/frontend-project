function goBack() {
  console.log('go back btn clicked ...');
}
function toggleMenu() {
  console.log('toggle-menu btn clicked ...');
}
const backIcon = BackIcon();
const logo = Logo({ className: 'logo logo--md' });
const menuIcon = MenuIcon();

const backButton = Button({
  className: 'header__btn',
  children: backIcon,
  onClick: goBack,
});
const menuButton = Button({
  className: 'header__btn',
  children: menuIcon,
  onClick: toggleMenu,
});
function HeaderControls(props) {
  return React.createElement('div', props, backButton, logo, menuButton);
}
