const rightArrow = document.querySelector('.ra');
const leftArrow = document.querySelector('.la');
const testiParagraf = document.querySelector('.paragrafTesti');
const testiName = document.querySelector('.name');
const testiJob = document.querySelector('.job');

let currentTesti = 1;

rightArrow.addEventListener('click', () => {
    currentTesti = currentTesti === 3 ? 1 : currentTesti + 1;
    updateTestimonial();
});

leftArrow.addEventListener('click', () => {
    currentTesti = currentTesti === 1 ? 3 : currentTesti - 1;
    updateTestimonial();
});

function updateTestimonial() {
    if (currentTesti === 1) {
        testiParagraf.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ab dignissimos corrupti animi ad natus aliquam. Aliquam impedit sequi, nisi ea blanditiis nostrum cumque nemo quia ad ut nesciunt molestiaeunde voluptatum labore expedita nobis sapiente corporis ratione. Et, hic.';
        testiName.innerHTML = 'Abdul Rahman';
        testiJob.innerHTML = 'Front End Developer';
    } else if (currentTesti === 2) {
        testiParagraf.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit consequatur necessitatibus? Commodieveniet animi. A quis enim autem accusamus illo ipsam temporibus commodi assumenda magnam, incidunt nemo beataeperferendis asperiores nostrum in, ipsum ad.';
        testiName.innerHTML = 'Alif Raynar';
        testiJob.innerHTML = 'UI/UX Designer';
    } else if (currentTesti === 3) {
        testiParagraf.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit consequatur necessitatibus? Commodieveniet animi. A quis enim autem accusamus illo ipsam temporibus commodi assumenda magnam, incidunt nemo beataeperferendis asperiores nostrum in, ipsum ad.';
        testiName.innerHTML = 'Sepul';
        testiJob.innerHTML = 'Back End Developer';
    }
}

// lazy loading

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelectorAll('img');
    image.forEach(img => {
        img.setAttribute('loading', 'lazy');
    })
})
