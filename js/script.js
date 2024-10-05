const part_one = document.querySelector('#part_one')
const part_two = document.querySelector('#part_two')
const readme = document.querySelector('.readme')
const blog = document.querySelector('.blog')

readme.addEventListener('click', () => {
    part_two.style.display = 'none'
    part_one.style.display = 'block'
    readme.style.background = 'rgba(57, 57, 57, 0.804)';
    blog.style.background = 'none';
})

blog.addEventListener('click', () => {
    part_two.style.display = 'block'
    part_one.style.display = 'none'
    readme.style.background = 'none';
    blog.style.background = 'rgba(57, 57, 57, 0.804)';
})

