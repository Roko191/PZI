/* Load Highlight.js basic functions */
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad({ singleLine: true });

/* Listen for clicks on info icons */
let infoBoxes = document.querySelectorAll('.section-content .info-icon');
infoBoxes.forEach(element => {
  element.addEventListener('click', e => {
    e.stopPropagation();
    let clickedElement = e.currentTarget;
    clickedElement.classList.toggle('show-info');
  });
});

/* Display code for 'Zadatak 1' */
let codeBlocks = document.querySelectorAll(
  '.section-content > .code-box code.code'
);

for (let i = 0; i < codeBlocks.length; i++) {
  const element = codeBlocks[i];
  let num = i + 1;
  document.getElementById(`code${num}`).innerHTML = document
    .getElementById(`zadatak${num}`)
    .innerText.replace(/^\s*[\r\n]/gm, '');
}
