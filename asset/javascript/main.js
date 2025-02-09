/*------------------------------
#Header
/-----------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.navigations ul');
    const menuIcon = document.querySelector('.menu-icon');
    const exitIcon = document.querySelector('.exit-icon');
    const overlay = document.querySelector('.overlay');
    const theBody = document.querySelector('body');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            list.classList.add('active');
            overlay.classList.add('active');
            exitIcon.classList.add('active'); // Ajouter la classe active pour l'icône
            menuIcon.style.display = 'none';
            document.body.classList.add('no-scroll');
        });
    }

    if (exitIcon) {
        exitIcon.addEventListener('click', () => {
            list.classList.remove('active');
            overlay.classList.remove('active');
            exitIcon.classList.remove('active'); // Supprimer la classe active pour cacher l'icône
            menuIcon.style.display = 'flex';
            document.body.classList.remove('no-scroll');
        });
    }
});

/*----------------------------------
#Home page
----------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const homeImage = document.querySelectorAll('.home-bg');
    const circles = document.querySelectorAll('.circle');
    let currentIndex = 0;

    function showItem(index) {
        homeImage[currentIndex].style.display = 'none';
        circles[currentIndex].classList.remove('act');
        homeImage[index].style.display = 'block';
        circles[index].classList.add('act');
        currentIndex = index;
    }

    function showNextItem() {
        const nextIndex = (currentIndex + 1) % homeImage.length;
        showItem(nextIndex);
    }

    function showPreviousItem() {
        const prevIndex = (currentIndex - 1 + homeImage.length) % homeImage.length;
        showItem(prevIndex);
    }

    function goToItem(index) {
        showItem(index);
    }

    // Initial display setup
    homeImage.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.display = 'none';
        }
    });

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            goToItem(index);
        });
    });

    // Auto-scroll functionality
    setInterval(showNextItem, 5000);
});

/*------------------------------
#For our counter
/-----------------------------*/
document.addEventListener('DOMContentLoaded', startValueAnimation);

function startValueAnimation() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-Val'));
        let decimalPart = endValue % 1;
        let steps = Math.floor(endValue);
        let stepDuration = interval / steps;
        let counter = setInterval(function () {
            if (startValue < steps) {
                startValue += 1;
                valueDisplay.textContent = startValue;
            } else if (startValue === steps && decimalPart > 0) {
                startValue += decimalPart;
                valueDisplay.textContent = endValue.toFixed(1);
            } else {
                clearInterval(counter);
            }
        }, stepDuration);
    });
}

/* --------------------
#Scroller
-------------------- */
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}