// const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4e90f7dddfmsh8180d0bb6dbb410p190014jsn7c7599e39e6a',
// 		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const colors = ['red','orange','skyblue','pink','purple','rgb(61, 62, 66)','hotpink','orchid'];

	// crd +=`<div class="clrbx col-sm-12 col-md-6 col-lg-4 col-xl-3" style="background-color:${items} ;"></div>  `
let search = document.getElementsByClassName('clrbx');
seacrh.forEach((item) => {
	const randomIndex = Math.floor(Math.random()*colors.length);
	item.style.backgroundColor = colors[randomIndex];
});

