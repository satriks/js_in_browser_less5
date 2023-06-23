const interests = Array.from(document.querySelector('.interests_main').firstElementChild.children)
interests.forEach(el => el.firstElementChild.firstElementChild.addEventListener('change',() => addCheck(el) ))


function addCheck(mainInterest) {
    console.log(mainInterest);
    let sideInterests = mainInterest.lastElementChild.querySelectorAll('input')
    sideInterests.forEach(el => el.checked = mainInterest.firstElementChild.firstElementChild.checked)
}