const KEY = '15302132-ca85c086cf949d6bcfe7eaa75';

  export default function pixApi(search, pageNum, callback){
    const defaultUrl =
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNum}&per_page=12&key=${KEY}`;
    fetch (defaultUrl).then(data => data.json()).then(data => callback(data)).catch(error => console.log(error))};
