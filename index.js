
const featureCards=document.querySelector('.feature-container');

const dataCard=[
  {
    id:1,
    name:'Alijan Rahimi',
    skill:'Frontend Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
  {
    id:2,
    name:'Mohammad Amin Rafi',
    skill:'Full Stack Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
  {
    id:3,
    name:'Jawad Nazari',
    skill:'Full Stack Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
  {
    id:4,
    name:'Abdul Hadi Haider',
    skill:'Frontend Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
  {
    id:5,
    name:'Masouma Jaffari',
    skill:'Full Stack Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
  {
    id:6,
    name:'Alijan Rahimi',
    skill:'Full Stack Developer',
    details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    image:'images/alijan.png',
  },
];

function generatCards(){
  featureCards.innerHTML=dataCard.map((card)=>{
    const {id,name,skill,details,image}=card;
    return `
    <div class="feature-card" id="card${id}">
      <div class="img-box">
        <img class="bg-icon" src="images/bg-chessboard-icon.png" alt="background icon">
        <img class="person-img" src="${image}">
      </div>
      <div class="details-box">
        <h4>${name}</h4>
        <h3>${skill}</h3>
        <p>${details}</p>
      </div>
    </div>
    `
  }).join('');
}
generatCards()



const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-list').forEach(list =>list.addEventListener(('click'), ()=>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

