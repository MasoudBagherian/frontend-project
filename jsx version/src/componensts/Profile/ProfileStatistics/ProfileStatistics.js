function ProfileStatistics(props) {
  return (
    <div className="profile__statistics font-secondary">
      <h3 className="heading">{props.quantity}</h3>
      <p className="key">{props.tag}</p>
    </div>
  );
}
