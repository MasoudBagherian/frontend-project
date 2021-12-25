function handleFollow() {
  console.log('follow btn clicked ...');
}
function handleMessage() {
  console.log('message btn clicked ...');
}
function showOptions() {
  console.log('show options btn clicked ...');
}

function ProfileFooter() {
  return (
    <div className="profile__footer">
      <Button
        btnClass="profile__btn btn btn-primary font-secondary"
        handleClick={handleFollow}>
        follow
      </Button>
      <Button
        btnClass="profile__btn btn btn-secondary font-secondary"
        handleClick={handleMessage}>
        message
      </Button>
      <Button
        btnClass="profile__btn profile__btn--sm btn btn-secondary"
        handleClick={showOptions}>
        <OptionsIcon />
      </Button>
    </div>
  );
}
