




document.addEventListener("DOMContentLoaded",function(e){
    let btn = document.querySelector("#mybtn");

    

btn.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "#808080";
 });
btn.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "#ffffff";

 });

let icn = document.querySelector("#fa-icon");

icn.addEventListener("mouseover", (e) => {
    e.target.setAttribute("class","far fa-cog fa-spin");
});
icn.addEventListener("mouseout", (e) => {
    e.target.setAttribute("class","far fa-cog ");
});

home.addEventListener("mouseover", (e) => {
    e.target.style.color = "#000000";
});
home.addEventListener("mouseout", (e) => {
    e.target.style.color = "#808080";
});


sub_icons.addEventListener("mouseover", (e) => {
    e.target.style.color = "#000000";
});
sub_icons.addEventListener("mouseout", (e) => {
    e.target.style.color = "#808080";
});
profile_pic.addEventListener("click",function(e){
   

    });
});
