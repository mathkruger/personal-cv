(function () {
    var body = document.querySelector('body');
    var icon = document.querySelector('.nm-icon');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('night');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
})();

var toggleNightMode = function () {
    var body = document.querySelector('body');
    var icon = document.querySelector('.nm-icon');

    body.classList.toggle('night');

    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
}