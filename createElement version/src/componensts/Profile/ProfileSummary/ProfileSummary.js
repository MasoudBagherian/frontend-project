const profileAvatar = ProfileAvatar({ className: 'profile__avatar' });
const profileInfo = ProfileInfo({ className: 'profile__info' });
function ProfileSummary(props) {
  return React.createElement('div', props, profileAvatar, profileInfo);
}
