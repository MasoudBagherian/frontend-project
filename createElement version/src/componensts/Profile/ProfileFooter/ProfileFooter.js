function handleFollow() {
  console.log('follow btn clicked ...');
}
function handleMessage() {
  console.log('message btn clicked ...');
}
function showOptions() {
  console.log('show options btn clicked ...');
}
const followButton = Button({
  className: 'profile__btn btn btn-primary font-secondary',
  children: 'follow',
  onClick: handleFollow,
});
const messageButton = Button({
  className: 'profile__btn btn btn-secondary font-secondary',
  children: 'message',
  onClick: handleMessage,
});
const optionsButton = Button({
  className: 'profile__btn profile__btn--sm btn btn-secondary',
  children: OptionsIcon(),
  onClick: showOptions,
});
function ProfileFooter(props) {
  return React.createElement(
    'div',
    props,
    followButton,
    messageButton,
    optionsButton
  );
}
