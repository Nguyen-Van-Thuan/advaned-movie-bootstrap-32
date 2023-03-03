// Buoc 1: khai bao bien
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`

// Buoc 2: goi du lieu API

/*------Phuong thuc: fetch------*/
// Cach 1: Dung fetch khong co async/await (Khong khuyen khich)
// function getMoviesAPI() {

//     const response = fetch(`${API_URL}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data.results))
// }
// getMoviesAPI();

// Cach 2: Dung fetch co async/await (Khuyen khich khi dung fecch)
// async function getMoviesAPI() {

//     const response = await fetch(`${API_URL}`)
//     const data = await response.json();
//     console.log(data.results, 'data');
// }
// getMoviesAPI();

/* -----Thu vien: axios----*/

// Cach 1: Khong dung async/await (Khong nen dung)
// function getMoviesAPI() {
//     axios.get(`${API_URL}`).then(function(response){
//         console.log(response.data.results);
//     })
// }
// getMoviesAPI();

// Cach 2: Dung async/await
getMoviesAPI(API_URL);

async function getMoviesAPI(API_URL) {

    const response = await axios.get(`${API_URL}`);
    const data = await response.data.results
    // console.log(data, 'data');
    showMovie(data)

}

function showMovie(data) {
    console.log(data, 'du lieu tu api')
    let html = ``;
    data.map()
}
