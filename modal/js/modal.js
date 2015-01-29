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

    var modalTrigger = document.querySelector('.modal--btn');
    var modal = document.querySelector('.modal');
    var modalBox = document.querySelector('.modal__box');
    var modalSubmit = document.querySelector('.modal__submit');
    var modalExit = document.querySelector('.modal__exit');
    var modalOpen = document.querySelector('.modal--open');

    modalTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleClass(modal.parentNode, 'modal--open');
    });

    function modalClose(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            var modalOpen = document.querySelector('.modal--open');
            if (modalOpen) {
                toggleClass(modal.parentNode, 'modal--open');
            }
        });
    }

    modalClose(modal);
    modalClose(modalExit);
    modalClose(modalSubmit);


//Using this to prevent propogation of on click for body when clicking on modal box due to body event listener
    modalBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
})();
