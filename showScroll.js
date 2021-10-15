let scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
let elementsToShow = document.querySelectorAll('.show');
console.log(elementsToShow)
function loop() {

    elementsToShow.forEach(function (element) {
        
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
            // console.log(element)
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}
loop();
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}