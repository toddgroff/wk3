(function() {
    function toggleClass(element, className) {
    var currentClasses = element.className;

        if (currentClasses.indexOf(className) >= 0) {
            element.className = currentClasses.replace(className, '').trim();
        }
        else {
            element.className += ' ' + className;
        }
    }

    var menuMove = document.querySelector('.admin__button');

    menuMove.addEventListener('click', function() {
        toggleClass(menuMove.parentNode, 'admin--flyout');
    });

    // var menuClose = document.querySelector('body');
    //
    // menuClose.addEventListener('click', function() {
    //     removeClass =
    // })
})();
