const profileStatistics = ProfileStatistics({
  className: 'profile__statistics font-secondary',
});
function ProfileInfo(props) {
  return React.createElement(
    'div',
    props,
    ProfileStatistics({
      className: 'profile__statistics font-secondary',
      quantity: '6368',
      tag: 'posts',
    }),
    ProfileStatistics({
      className: 'profile__statistics font-secondary',
      quantity: '350 m',
      tag: 'followers',
    }),
    ProfileStatistics({
      className: 'profile__statistics font-secondary',
      quantity: '101',
      tag: 'following',
    })
  );
}
