const quotes = [
    `Dancing is silent poetry. - Simonides`,
    `Wait a minute, wait a minute. You ain\'t heard nothin\' yet! - The Jazz Singer`,
    'One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know. - Animal Crackers',
    'Do, or do not. There is no "try". - Star Wars: Empire Strikes Back',
    'Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth. - Sherlock Holmes',
    'I can write better than anybody who can write faster, and I can write faster than anybody who can write better. - A. J. Liebling',
    'The significant problems we face cannot be solved at the same level of thinking we were at when we created them. - Albert Einstein',
    'Everybody pities the weak. Jealousy you have to earn. - Arnold Schwarzenegger',
    'Mother of mercy, is this the end of Rico? - Little Caesar',
    'I have not failed. I\'ve just found 10,000 ways that won\'t work. - Thomas Alba Edison'
];
const body = document.querySelector('body');
body.style.background = 'url(bryan-minear-317365.jpg) no-repeat center center fixed';
body.style.fontFamily = 'Work Sans, sans-serif';
body.style.letterSpacing = '0.1em';
body.style.backgroundSize = 'cover';
body.style.minHeight = '100%';
body.style.width = '100%';
const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.width = '90%';
container.style.maxWidth = '800px';
const quoteCloud = document.createElement('div');
document.body.appendChild(quoteCloud);
quoteCloud.classList.add('quote-cloud');
quoteCloud.style.display = 'flex';
quoteCloud.style.flexDirection = 'column';
quoteCloud.style.justifyContent = 'start';
quoteCloud.style.width = '75%';
quoteCloud.style.maxWidth = '800px';
quoteCloud.style.zIndex = '1';
quoteCloud.style.margin = '20px auto';
quoteCloud.style.height = '20vh';
quoteCloud.style.backgroundColor = 'none';
quoteCloud.style.borderRadius = '30px';
quoteCloud.style.border = '10px solid transparent';
quoteCloud.style.position = 'relative';
quoteCloud.style.cursor = 'pointer';
const para = document.createElement('p');
document.body.appendChild(para);
para.innerHTML = `Click me!`;
// randomize the index retrieval of the quotes array so that each time the user clicks on the text rendered to the page, a random quote appears.
para.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    para.textContent = quotes[randomIndex];
})