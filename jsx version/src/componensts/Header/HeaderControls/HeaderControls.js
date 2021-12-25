function goBack() {
  console.log('go back btn clicked ...');
}
function toggleMenu() {
  console.log('toggle-menu btn clicked ...');
}
const backButton = (
  <Button btnClass="header__btn" onClick={goBack}>
    <BackIcon />
  </Button>
);
function HeaderControls() {
  return (
    <div className="header__controls">
      <Button btnClass="header__btn" handleClick={goBack}>
        <BackIcon />
      </Button>
      <Logo logoClass="logo logo--md" />
      <Button btnClass="header__btn" handleClick={toggleMenu}>
        <MenuIcon />
      </Button>
    </div>
  );
}
