const profileImage = React.createElement('img', {
  src: 'assets/image/instagram-avatar.svg',
  className: 'default',
});
function ProfileAvatar(props) {
  return React.createElement('div', props, profileImage);
}
