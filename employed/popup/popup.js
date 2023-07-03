document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('search-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let search_job = document.getElementById('search-job').value;
    let search_location = document.getElementById('search-location').value;
    let search_exclusion = document.getElementById('search-exclution').value;

    let date = document.getElementById('date').value;

    search_job = '"' + search_job.split(', ').join('" "') + '"';
    search_location = '"' + search_location.split(', ').join('" "') + '"';
    search_exclusion = '-' + search_exclusion.split(', ').join(' -');

    const searchURL = `
https://www.google.com/search?q=
site:app.dover.io+%7C+
site:aquenttalent.com+%7C+
site:greenhouse.io+%7C+
site:jobs.ashbyhq.com+%7C+
site:jobs.lever.co+%7C+
site:roberthalf.com/job+` +
encodeURIComponent(search_job) + ' ' +
encodeURIComponent(search_location) + ' ' +
encodeURIComponent(search_exclusion) + ' ' +
'after:' + date;

    chrome.tabs.create({ url: searchURL });
  });
});
