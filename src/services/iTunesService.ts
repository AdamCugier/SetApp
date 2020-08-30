const url = process.env.REACT_APP_URL;
const iTunesService = {
  getTracks() {
    const fetchedData = fetch(`${url}/us/rss/topalbums/limit=100/json`).then(response => response.json()).catch(err => alert(err));

    return fetchedData;
  }
};

export default iTunesService
