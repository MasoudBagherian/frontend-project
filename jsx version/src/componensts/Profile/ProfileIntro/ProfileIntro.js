function ProfileIntro(props) {
  return (
    <div className="profile__intro">
      <h2 className="profile__title">{props.title}</h2>
      <p className="profile__description">{props.description}</p>
      <a href="#" className="profile__link">
        {props.link}
      </a>
    </div>
  );
}
