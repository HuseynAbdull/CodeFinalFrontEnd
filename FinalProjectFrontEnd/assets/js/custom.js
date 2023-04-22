let buttons = document.querySelectorAll(".links button");
    for (let btn of buttons) {
      btn.onclick = function() {
        let active_btn = document.querySelector('.active-description');
        active_btn.classList.remove('active-description');
        this.classList.add("active-description");

        let index = this.getAttribute('id');
        let contents = document.querySelectorAll('.content-box')
        for(let div of contents) {
            if(div.getAttribute('id') == index){
                div.classList.remove('d-none')
            }
            else{
                div.classList.add('d-none')
            }
        }
      }
    };

var searchButtons=document.getElementsByClassName('phone-search-btn')
for(let searchButton of searchButtons){
  searchButton.addEventListener('click', function(){
    console.log("salam");
let searchSections=document.getElementsByClassName('right-header-bottom')
for(let searchSection of searchSections){
  searchSection.classList.toggle('active-for-search')
}
  })
}
