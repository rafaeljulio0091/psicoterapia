function acceptCookies() {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
}
function rejectCookies() {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "reject");
}
$(document).ready(function(){
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }
    let btnCookiesAccept = document.querySelector(".btn-cookies-accept");
    let btnCookiesReject = document.querySelector(".btn-cookies-reject");
      
    btnCookiesAccept.addEventListener('click', acceptCookies);
    btnCookiesReject.addEventListener('click', rejectCookies);
})