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

