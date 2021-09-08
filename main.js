const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerText = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.innerText = 'Darken';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
    }
});
