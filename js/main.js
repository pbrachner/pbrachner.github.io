// Test-JS to mark buttons
// ATTENTION: clicking on font doesn't work yet
let feature1 = document.getElementById('feature-1');
let imgfeature1 = document.getElementById('img-feature-1');
let feature2 = document.getElementById('feature-2');
let imgfeature2 = document.getElementById('img-feature-2');
let counter = 0;

let setBackground = function(event) {
    if (counter % 2 === 0) {
        event.target.style.backgroundColor = '#204f5f80';
        event.target.style.color = '#204f5f';
    } else {
        event.target.style.backgroundColor = '#204f5f';
        event.target.style.color = '#f4e7d3';
    }
    counter++;
}
let setBackgroundContainer = function(event) {
    if (counter % 2 === 0) {
        event.target.parentElement.style.backgroundColor = '#204f5f80';
        event.target.parentElement.style.color = '#204f5f';
    } else {
        event.target.parentElement.style.backgroundColor = '#204f5f';
        event.target.parentElement.style.color = '#f4e7d3';
    }
    counter++;
}

feature1.onclick = setBackground;
feature2.onclick = setBackground;
imgfeature1.onclick = setBackgroundContainer;
imgfeature2.onclick = setBackgroundContainer;