let API_KEY = '48871837d14e4b66af953a3a30852a99';

let topHeadlines = 'https://newsapi.org/v2/top-headlines?';

const endpointGenerator = (country, category, search) => {
  country = country !== '' ? 'country=' + country : 'country=us';
  //  sources !== '' ? (sources = '&sources=' + sources) : '&sources=bbc-news';
  category = category !== '' ? '&category=' + category : '&category=business';
  search = search !== '' ? '&q=' + search : search;

  console.log('/////////', 'endpointgenerator');

  let url = topHeadlines + country + category + search + '&apiKey=' + API_KEY;

  console.log('==========', url);
  return url;
};

function getNews(endpoint) {
  let xhr = new XMLHttpRequest();
  let ERROR_MESSAGE = 'Something bad happened!';
  let data = [];

  console.log('/////////', 'getnews');

  xhr.onreadystatechange = function() {
    console.log('/////////', 'onreadystate');

    let countOfNews = 0;
    if (xhr.readyState === 4) {
      data = JSON.parse(xhr.response);
      console.log(data);

      if (data.status === 'ok' && totalResults > 0) {
        countOfNews = data.totalResults;
      } else {
        document.body.innerHTML = ERROR_MESSAGE;
      }
    }
  };
  xhr.open('GET', endpoint);
  xhr.send();
}

document.getElementById('searchButton').addEventListener('click', function() {
  console.log('/////////', 'button clicked');

  let country = document.getElementById('country').value;
  let category = document.getElementById('category').value;
  let search = document.getElementById('search').value;

  getNews(endpointGenerator(country, category, search));
});
