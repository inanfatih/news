let API_KEY = '48871837d14e4b66af953a3a30852a99';

let country = '';

let topHeadlines =
  'https://newsapi.org/v2/top-headlines?country=' +
  country +
  '&apiKey=' +
  API_KEY;

function getNews(endpoint) {
  let xhr = new XMLHttpRequest();
  let countOfNews = 0;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.response);
      console.log(data);

      if (data.status === 'ok') {
        countOfNews = data.totalResults;
      }
    }
  };
}
