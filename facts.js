// Event listeners for different elements
document.getElementById('fact1').addEventListener('click', function () {
    alert('You clicked on Fact 1!');
});

document.getElementById('fact2').addEventListener('mouseover', function () {
    alert('Fact 2!');
});

document.getElementById('fact3').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        alert('You pressed Enter on Fact 3!');
    }
});