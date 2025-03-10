const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);
const cardContainerElement = document.getElementById("card-container");
console.log(cardContainerElement);


cardContainerElement.innerHTML = "";
for(let i=0; i < teamMembers.length; i++){
  currentMember = teamMembers[i];
  const newCardElement = cardElementCreating(currentMember);
  console.log(newCardElement);
    cardContainerElement.innerHTML += newCardElement;
}


console.log({cardContainerElement});




function cardElementCreating(obj){
  const name = obj.name;
  console.log(name)
  const role = obj.role;
  console.log(role)
  const img = obj.img;
  console.log(img)
  const email = obj.email;
  console.log(email);

  const cardElement = `
  <div class="card">
    <div class="img-container">
      <img id="image" src="${img}" alt="${name}">
    </div>
    <div class="card-info">
        <div id="name">${name}</div>
        <div id="role">${role}</div>
        <a href="" id="email">${email}</a>
    </div>
  </div>
  `          
return cardElement;
}
