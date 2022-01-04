function configAlert(type) {
  if (type === 'error') {
    return {
      color: '#f02020',
      icon: <ErrorIcon />,
      title: 'error',
    };
  }
  if (type === 'warning') {
    return {
      color: '#cc621b',
      icon: <WarningIcon />,
      title: 'warning',
    };
  }
}
function Alert({ type, message }) {
  return (
    <div className="inner-container">
      <div className="alert">
        <div
          className="alert__border"
          style={{
            backgroundColor: configAlert(type).color,
          }}></div>
        <div
          className="alert__icon"
          style={{
            color: configAlert(type).color,
          }}>
          {configAlert(type).icon}
        </div>
        <div className="alert__info">
          <h4
            className="alert__title"
            style={{
              backgroundColor: configAlert(type).color,
            }}>
            {configAlert(type).title}
          </h4>
          <p className="alert__message">{message}</p>
        </div>
      </div>
    </div>
  );
}
