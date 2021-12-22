const logoBody = React.createElement(
  'h1',
  { className: 'logo__body' },
  'instagram'
);
const logoBadge = LogoBadge({ className: 'logo__badge' });
function Logo(props) {
  return React.createElement('div', props, logoBody, logoBadge);
}
