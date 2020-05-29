function save(rowId) {
    const row = document.getElementById(`row-${rowId}`)
    const inputs = [...document.getElementsByClassName(`input-${rowId}`)]
    inputs.forEach((input) => {
        newField = input.tagName === 'BUTTON' ? changeButton(input) : changeField(input)
        const parent = input.parentElement
        parent.removeChild(input)
        parent.appendChild(newField)
    })
}

function changeButton(button) {
    if(button.innerText === 'Remove')
        return button
    
    button.innerText = 'Edit'
    let onclick = button.getAttribute('onclick')
    button.setAttribute('onclick', onclick.replace('save', 'edit'))
    return button
}

function changeField(field) {
    console.log(field.tagName)
    let element = document.createElement('span')
    element.innerText = field.value
    element.setAttribute('class', field.getAttribute('class'))
    return element
}