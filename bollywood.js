// const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';
// const options = {
	// 	method: 'GET',
	// 	headers: {
		// 		'X-RapidAPI-Key': '4e90f7dddfmsh8180d0bb6dbb410p190014jsn7c7599e39e6a',
		// 		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		// 	}
		// };
		
		//  fetch(url, options)
		//   .then(response=>response.json())
		//   .then(response=> console.log(response))
		//   .catch(err=> console.err(err));
// let audioElement = new Audio("");
const playbtns = Array.from(document.getElementsByClassName('playbtn'));
console.log('hello');
let bollywood = [
	{
		id:'1',
	imgsrc: "https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/Untitleddesign67-1597919456187.png?fm=png&auto=format&blur=500",
	SongName: "Kaun tujhe U",
	SongPath: "Kaun Tujhe (M S Dhoni - The Untold Story) 128.mp3 ",
	Singer:"~By Armaan Malik"
},
{
	id:'2',
	imgsrc:"gadar2.jpg",
	SongName:"udd ja kaale kava",
	SongPath:"Udd-Jaa-Kaale-Kaava--From-Gadar-2--Udit-Narayan-Alka-Yagnik.mp3",
	Singer:"~By Udit Narayan",
},
{
	id:'3',
	imgsrc:"https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-500x500.jpg",
	SongName:"Khariyat",
	SongPath:"Khairiyat(PagalWorld.com.se).mp3",
	Singer:"~By Arjit Singh",
},
{
	id:'4',
	imgsrc:"concert2.jpeg",
	SongName:"Pal Pal dil ke paas",
	SongPath:"Pal Pal Dil Ke Paas - Blackmail.mp3",
	Singer:"~By Arjit Singh",
},
{
	id:'5',
	imgsrc:"https://c-cl.cdn.smule.com/rs-s77/arr/ae/64/11a8a81e-1cb1-4edc-9dba-d3ee97ca2c91.jpg",
	Singer:"~By Kshitj Tarey",
	SongName:"Aye khuda..",
	SongPath:"Aye Khuda - Paathshaala 128 Kbps.mp3"
},
{
		id:'6',
		imgsrc:"https://statusclips.com/wp-content/uploads/2021/11/Iktara-Song-Status-Video-Download.jpg",
		Singer:"~By Amit Trivedi",
		SongName:"Iktaar",
		SongPath:"Aye Khuda - Paathshaala 128 Kbps.mp3"
	},
	{
		id:'7',
		imgsrc:"https://i.ytimg.com/vi/rhOZ1ta8700/maxresdefault.jpg",
		Singer:"~By Sonu Nigam",
		SongName:"Kal Ho Na Ho",
		SongPath:"Aye Khuda - Paathshaala 128 Kbps.mp3"
	},
	{
		id:'8',
		imgsrc:"https://i.ytimg.com/vi/5CGgGuuIMCQ/hqdefault.jpg",
		Singer:"~By Kumar Sanu",
		SongName:"Jab Koi Baat Bigad",
		SongPath:"Aye Khuda - Paathshaala 128 Kbps.mp3",
	},
	


]
console.log(bollywood);
// let Cards ="";
// bollywood.map((variable)=>{
// 	Cards += `<div id="songcard" class="songCard col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xl-3">
// 	<img src="${variable.imgsrc}" alt="image" class="image">
// 	<div id="box">
// 	<span class="songname">${variable.SongName}</span><br><i class="fa playbtn fa-play " style="font-size:36px;"></i><br>
// <span class="singer">${variable.Singer}</span>
// </div>`
// })
// document.getElementById("flexbox").innerHTML = Cards;
Array.from(document.getElementsByClassName("songCard")).forEach((card,i)=>{
	// console.log("hiii....");
	card.getElementsByTagName('img')[0].src = bollywood[i].imgsrc ;
	card.getElementsByClassName("songname")[0].innerHTML=bollywood[i].SongName;
	// console.log("Happy");
	card.getElementsByClassName("singer")[0].innerHTML=bollywood[i].Singer;
});
console.log('Happy');

let Playbtn = document.getElementsByClassName('playbtn');
Playbtn.forEach((Element)=>{
	Element.addEventListener('click',(btn)=>{
		btn.target.classList.remove('fa-play');
		btn.target.classList.add('fa-pause');
	})
})
// Get all elements with the class "playbtn" and convert them into an array
console.log('Ralsjoalsad');

playbtns.forEach((element) => {
  console.log('Happy');

  element.addEventListener('click', (event) => {
    // Toggle the "fa-play" and "fa-pause" classes on the clicked element
    event.target.classList.remove('fa-play');
    event.target.classList.add('fa-pause');
  });
});
