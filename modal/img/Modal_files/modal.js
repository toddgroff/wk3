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

    modalTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleClass(modal.parentNode, 'modal--open');
    });

    var modalBodyClose = document.querySelector('body');
    var modalSubmitClose = document.querySelector('.modal__submit');
    var modalExitClose = document.querySelector('.modal__exit');

    modalBodyClose.addEventListener('click', function() {
        var modalOpen = document.querySelector('.modal--open');
        alert('that\'s my body');
        if (modalOpen) {
            toggleClass(modal.parentNode, 'modal--open');
        }
    });

    modalSubmitClose.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('close');
        var modalOpen = document.querySelector('.modal--open');
        if (modalOpen) {
            toggleClass(modal.parentNode, 'modal--open');
        }
    });

    modalExitClose.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('exit');
        var modalOpen = document.querySelector('.modal--open');
        if (modalOpen) {
            toggleClass(modal.parentNode, 'modal--open');
        }
    });

    // function maintainClass(element, className) {
    //     var currentClasses = element.className;
    //
    //     if (currentClasses.indexOf(className) >= 0) {
    //         element.className = currentClasses.replace(className, '').trim();
    //     }
    //     else {
    //         element.className += ' ' + className;
    //     }
    // }

    modal.addEventListener('click', function() {
        // e.stopPropagation();
        return false;
    });
})();
