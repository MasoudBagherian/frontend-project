const profileSummary = ProfileSummary({ className: 'profile__summary' });
const profileIntro = ProfileIntro({
  className: 'profile__intro',
  title: 'instagram',
  description: 'Bringing you closer to the people and things you love.',
  link: 'www.facebook.com/covidsupport',
});
const profileFooter = ProfileFooter({ className: 'profile__footer' });
function Profile(props) {
  return React.createElement(
    'div',
    props,
    profileSummary,
    profileIntro,
    profileFooter
  );
}
