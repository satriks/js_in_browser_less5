(function () {
    

document.querySelectorAll('input').forEach(el => el.addEventListener('change', handlChange))


function handlChange() {
    this.closest('li').lastElementChild.querySelectorAll('input').forEach(el => el.checked = this.checked)

    if (this.closest('ul').previousElementSibling) {     
        let el2 = this.closest('ul').previousElementSibling.firstElementChild
        nextLeavel(el2)
    }
}

function all(arr) {
    for (let i of arr) {
        console.log(i);
        console.log(i.checked, ' checked from all');
        if (!i.checked) {

            return false
        }
    }
    return true
    
}

function any(arr) {
    for (let i of arr) {
        if (i.checked) {
            return true
        }
    }
    return false
    
}

function nextLeavel(el) {
    let checleavel = (Array.from(el.closest('li').querySelectorAll('input')).splice(1))

    if (all(checleavel)) {
        el.indeterminate = false
        el.checked = true

    } else if (any(checleavel)) {
        el.indeterminate = true

    } else {
        el.indeterminate = false
        el.checked = false
    }

    if (el.closest('ul').previousElementSibling){
        nextLeavel(el.closest('ul').previousElementSibling.firstElementChild);
    }

}
}) ()