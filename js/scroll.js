const profile = document.querySelector("#profile");
const detail = document.querySelector("#detail");
const navBtnProfile = document.querySelector(".navBtnProfile");
const navBtnDetail = document.querySelector(".navBtnDetail");

navBtnProfile.onclick = function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));

    window.scrollTo ({
        'behavior': 'smooth',
        'top':  target.offsetTop
    })
}
navBtnDetail.onclick = function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));

    window.scrollTo ({
        'behavior' : 'smooth',
        'top' : target.offsetTop
    })
}
