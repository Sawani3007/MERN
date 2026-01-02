const students = [{
  name:'Sawani',
  year:2022,
},{
  name:'Nehal',
  year:2023,
},{
  name:'Kritika',
  year:2025,
},{
  name:"Sneha",
  year:'2023',
}]


const newList = document.createElement("ul");
const newHeading = document.createElement("h2");
newHeading.innerText="Sawani's College";

const rootElement = document.getElementById("root");

rootElement.append(newHeading);  
rootElement.append(newList);

for(let student of students){
  const listItem = document.createElement("li");
  listItem.innerHTML =`<del> ${student.name}</del>`;
  //listItem.innerText =`<del> ${student.name}</del>`;
  newList.append(listItem);
}