// remove appbar
let removeAppbar = () => {
  document.getElementById('APjFqb').value = '';
  document.getElementById('searchform').remove();
  document.getElementById('sfcnt').remove();
  document.getElementById('top_nav').remove();
  document.getElementById('appbar').remove();
};

removeAppbar();

// let url = window.location.href;
// let searchURL = url.search('filetype:');
// let jobLink = document.getElementsByClassName('LC20lb');

// if (url.slice(0, 41) === 'https://www.google.com/search?q=filetype:' && searchURL !== -1) {
//   jobLink[0].parentElement.setAttribute('target', '_blank');
//   jobLink[0].click();
// }