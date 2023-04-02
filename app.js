
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];

const personImg = document.getElementById("person-img");
const personAuthor = document.getElementById("author");
const personJob = document.getElementById("job");
const personnfo = document.getElementById("info");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const rBtn = document.querySelector(".random-btn");

let count = 1;


window.addEventListener("DOMContentLoaded", function () {
	profile()
});



function profile() {
	personImg.src = reviews[count].img;
	personAuthor.textContent = reviews[count].name;
	personJob.textContent = reviews[count].job;
	personnfo.textContent = reviews[count].info;
	
}

next.addEventListener("click", countNn)

function countNn(){
	count++
	if(count > reviews.length - 1){
		count = 0
	}
	profile()
	// console.log("clicked")
}

prev.addEventListener("click", countPr)

function countPr(){
	count--
	if(count < 0){
		count = 3
	}
	profile()
	// console.log("clicked")
}

rBtn.addEventListener("click", function(){
	count = Math.floor(Math.random() * reviews.length)
	profile()
})
