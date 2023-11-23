function acceptCookies() {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
}
$(document).ready(function(){
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }
    let btnCookies = document.querySelector(".btn-cookies");
      
    btnCookies.addEventListener('click', acceptCookies);
})