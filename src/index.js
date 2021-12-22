const root = document.getElementById('root');

const h1 = React.createElement(
  'h1',
  { children: 'hello world' },
  'hello world'
);
ReactDOM.render(App({ className: 'font-primary' }), root);
