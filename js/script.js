void (function () {
    const part_one = document.querySelector('#part_one');
    const part_two = document.querySelector('#part_two');
    const readme = document.querySelector('.readme');
    const blog = document.querySelector('.blog');

    readme.addEventListener('click', () => {
        part_two.style.display = 'none';
        part_one.style.display = 'block';
        readme.style.background = 'rgba(57, 57, 57, 0.804)';
        blog.style.background = 'none';
    });

    blog.addEventListener('click', () => {
        part_two.style.display = 'block';
        part_one.style.display = 'none';
        readme.style.background = 'none';
        blog.style.background = 'rgba(57, 57, 57, 0.804)';
    });
})();


void function() {
    const bars = document.querySelector('.bars');
    const xmark = document.querySelector('.xmark');
    const laft__aside = document.querySelector('.main__section--laft__aside');

    bars.addEventListener('click', () => {
        laft__aside.style.display = 'block'
        laft__aside.style.right = '0px'
        bars.style.display = 'none'
        xmark.style.display = 'block'
    })

    xmark.addEventListener('click', () => {
        laft__aside.style.display = 'none'
        laft__aside.style.right = '2000px'
        xmark.style.display = 'none'
        bars.style.display = 'block'
    })

}()





