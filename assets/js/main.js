const buttons = {
  follow: document.getElementById('follow-btn'),
  message: document.getElementById('message-btn'),
  back: document.getElementById('back-btn'),
  options: document.getElementById('options-btn'),
  menu: document.getElementById('menu-btn'),
};
function setListeners() {
  buttons.follow.addEventListener('click', handleFollow);
  buttons.message.addEventListener('click', handleMessage);
  buttons.back.addEventListener('click', goBack);
  buttons.options.addEventListener('click', showOptions);
  buttons.menu.addEventListener('click', toggleMenu);
}
function handleFollow() {
  console.log('follow btn clicked ...');
}
function handleMessage() {
  console.log('message btn clicked ...');
}
function goBack() {
  console.log('go back btn clicked ...');
}
function showOptions() {
  console.log('show options btn clicked ...');
}
function toggleMenu() {
  console.log('toggle-menu btn clicked ...');
}
function init() {
  setListeners();
}
init();
