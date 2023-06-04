// images
let images = document.querySelectorAll('img')
// wrapper
let wrapper = document.getElementById('wrapper')
// imgWrapper
let imgWrapper = document.getElementById('fullImg')
// close
let close = document.querySelector('span')

images.forEach((img, index) => {
    img.addEventListener('click', (evt) => {
        
        openModal(evt.target.src)
    })
})

close.addEventListener('click', () => (wrapper.style.display = 'none'));
wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
})
function openModal(pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic;
}