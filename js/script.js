// トップページのスクロールアニメーション
const targetElement = document.querySelectorAll(".animationTarget");
    document.addEventListener("scroll", function() {
        for (let i= 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6;
        if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
    }
    }
}
)

// Workページのスクロールアニメーション
const targetElementWork = document.querySelectorAll(".animationTargetWork");
    document.addEventListener("scroll", function() {
        for (let i= 0; i < targetElementWork.length; i++){
        const getElementDistanceWork = targetElementWork[i].getBoundingClientRect().top + targetElementWork[i].clientHeight * .2;
        if (window.innerHeight > getElementDistanceWork) {
        targetElementWork[i].classList.add("show");
    }
    }
}
)

// ローディング画面
window.addEventListener("load", function() {
    const loading = document.querySelector(".loading");
    const loadingImage = document.querySelector(".loading__image");
    setTimeout(function(){
        loadingImage.src ="image/icon_wakeup.svg";
        }, 2800)
    setTimeout(function(){
        document.querySelector(".loading").classList.add("hidden");
        }, 3000)
    })

// トップページのメインコピー
setTimeout(function(){
    const textAnimationTarget = document.querySelectorAll(".js-textAnimation");
    for (let i = 0; i < textAnimationTarget.length; i++) {
    const textElement = textAnimationTarget[i],
        texts = textElement.textContent,
        textsArray = [];

    textElement.textContent = "";

    for (let j = 0; j < texts.split("").length; j++) {
        textsArray.push('<span style="animation-delay: ' + (j * .2 )+ 's;">' + texts.split("")[j] + '</span>');
    }

    for (let k = 0; k < textsArray.length; k++) {
        textElement.innerHTML += textsArray[k];
    }
}
}, 3000)

// モーダルウィンドウ
const modalOpen = document.querySelector(".js-modal-open");
const modalClose = document.querySelector(".js-modal-close");
const modalWindow = document.querySelector(".modal-profile__window");

modalOpen.addEventListener("click",  function (event) {
    event.preventDefault();
    modalWindow.classList.add('show');
    modalClose.classList.add('show');
});

modalClose.addEventListener("click",  function () {
    modalWindow.classList.remove('show');
    modalClose.classList.remove('show');
});

// メールフォームのモーダルウィンドウ
const mailOpen = document.querySelector(".js-mail-open");
const mailClose = document.querySelector(".js-mail-close");
const mailWindow = document.querySelector(".modal-mail__window");

mailOpen.addEventListener("click",  function (event) {
    event.preventDefault();
    mailWindow.classList.add('show');
    mailClose.classList.add('show');
});

mailClose.addEventListener("click",  function () {
    mailWindow.classList.remove('show');
    mailClose.classList.remove('show');
});
