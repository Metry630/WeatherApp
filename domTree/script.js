const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const newP = document.createElement('p');
newP.classList.add('redText');
newP.textContent = "Hey I'm red!";
container.appendChild(newP);

const newH3 = document.createElement('h3');
newH3.classList.add('blueText');
newH3.textContent = "I'm a blue h3!";
container.appendChild(newH3);

let newDiv = document.createElement('div');
newDiv.classList.add('blackPink');

const newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div";
newDiv.appendChild(newH1);

const secondP = document.createElement('p');
secondP.textContent = "ME TOO!";
newDiv.appendChild(secondP);
container.appendChild(newDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});
