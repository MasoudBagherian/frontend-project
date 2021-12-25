function ProfileIntro(props) {
  const title = React.createElement('h2', {
    className: 'profile__title',
    children: props.title,
  });
  const description = React.createElement('p', {
    className: 'profile__description',
    children: props.description,
  });
  const link = React.createElement('a', {
    className: 'profile__link',
    href: '#',
    children: props.link,
  });
  return React.createElement('div', props, title, description, link);
}
