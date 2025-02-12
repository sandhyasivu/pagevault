//selecting popbox , popupoverlay , button. because if i click the plus then only the box should show, if u notice they both are in "display: none" , it should covert into block
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")
   
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//select cancel button when u notice i didnt click cancel button , but it automatically cancel because it is default .to avoid that we use preventDefault()
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
           event.preventDefault()
           popupoverlay.style.display="none";
           popupbox.style.display="none";

})

// select container because we need to add description , html-16th line,
//select add-book, book-title, book-titl-input, book-author, book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()

   var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`
     <h2>${booktitleinput.value}</h2>
     <h5>${bookauthorinput.value}</h5>
     <p>${bookdescriptioninput.value}</p>
     <button class="delete-btn">Delete</button>`
     container.append(div)
     popupoverlay.style.display="none";
     popupbox.style.display="none";

})

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});