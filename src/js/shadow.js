const scrollers = document.getElementsByClassName('scroll-shadow');

for (let scroller of scrollers) {
    scroller.addEventListener('scroll', () => {
        console.log('inner height: ' + scroller.innerHeight);
        console.log('scroll top: ' + scroller.scrollTop);
        console.log('offset height: ' + scroller.offsetHeight);

        if (scroller.scrollTop === 0) {
            scroller.classList.add('top');
        } else {
            scroller.classList.remove('top');
        }

        if (scroller.offsetHeight + scroller.scrollTop >= scroller.scrollHeight) {
            scroller.classList.add('bottom');
        } else {
            scroller.classList.remove('bottom');
        }
    })
}