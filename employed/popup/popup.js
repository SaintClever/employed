document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  let search_job = document.getElementById("search-job");
  let search_location = document.getElementById("search-location");
  let search_exclusion = document.getElementById("search-exclusion");
  let search_file = document.getElementById('search-file');
  let search_date = document.getElementById("date");
  let searchURL = '';

  let displayElement = document.getElementById('display');
  let body = document.getElementsByTagName('body');

  search_file.addEventListener('focus', () => {
    displayElement.style.display = 'none';
    body[0].style.height = '220px';
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let job = '"' + search_job.value.split(', ').join('" "') + '"';
    let location = '"' + search_location.value.split(', ').join('" "') + '"';
    let exclusion = "-" + search_exclusion.value.split(', ').join(" -");
    let file = '"' + search_file.value + '"';
    let date = search_date.value;
    
    let searchJob = `
https://www.google.com/search?q=
site:app.dover.io+%7C+
site:aquenttalent.com+%7C+
site:breezy.hr+%7C+
site:careers-page.com+%7C+
site:greenhouse.io+%7C+
site:jobs.ashbyhq.com+%7C+
site:jobs.lever.co+%7C+
site:jobs.smartrecruiters.com+%7C+
site:remoterocketship.com+%7C+
site:roberthalf.com/job+` +
encodeURIComponent(job) + " " +
encodeURIComponent(location) + " " +
encodeURIComponent(exclusion) + " " + "after:" + date;
    
    let searchFile = `
https://www.google.com/search?q=
filetype:pdf+%7C+
filetype:epub+%7C+
filetype:azw+%7C+
filetype:azw3+%7C+
filetype:kfx+%7C+
filetype:mobi+` +
encodeURIComponent(file) + " " + "after:" + date;
    

    if (displayElement.style.display === '' || displayElement.style.display === 'block') {
      searchURL = searchJob;
    } else if (displayElement.style.display === 'none') {
      searchURL = searchFile;
    }
    
    chrome.tabs.create({ url: searchURL });
    display.style.display = 'block';
    
  });
});