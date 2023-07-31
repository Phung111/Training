const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const left = entry.target.querySelector('.animate__left');
        const right = entry.target.querySelector('.animate__right');
        const up = entry.target.querySelector('.animate__up');
        const down = entry.target.querySelector('.animate__down');

        if (entry.isIntersecting) {
            left.classList.add('animate__fadeInLeft');
            right.classList.add('animate__fadeInRight');
            up.classList.add('animate__fadeInUp');
            down.classList.add('animate__fadeInDown');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        left.classList.remove('animate__fadeInLeft');
        right.classList.remove('animate__fadeInRight');
        up.classList.remove('animate__fadeInUp');
        down.classList.remove('animate__fadeInDown');
    });
});

observer.observe(document.querySelector('.animation__wraper'));
observer.observe(document.querySelector('.animation__wraper2'));
observer.observe(document.querySelector('.animation__wraper3'));
observer.observe(document.querySelector('.animation__wraper4'));
observer.observe(document.querySelector('.animation__wraper5'));
observer.observe(document.querySelector('.animation__wraper6'));

