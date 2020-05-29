const headers = ['name1', 'name2', 'name3', 'actions']
const cells = [
    [{
        tag: 'input',
        attributes: new Map([['name', 'name1'], ['type', 'text']])
    }], [{
        tag: 'input',
        attributes: new Map([['name', 'name1'], ['type', 'text']])
    }], [{
        tag: 'input',
        attributes: new Map([['name', 'name1'], ['type', 'text']])
    }], [{
        tag: 'button',
        attributes: new Map([]),
        onclick: 'save',
        innerText: 'Save'
    }, {
        tag: 'button',
        attributes: new Map([]),
        onclick: 'remove',
        innerText: 'Remove'
    }]
]

let lastRowId = 0

function add() {
    table = document.getElementById('tab')
    addRow(table)
    lastRowId += 1
    if (document.getElementsByTagName('thead').length == 0) {
        addHead(table)
    }
}

function addRow(table) {
    let row = table.insertRow()
    cells.map(((cellSpec) => buildCell(lastRowId, cellSpec)))
           .forEach((cell) => row.appendChild(cell))
    row.setAttribute('id', `row-${lastRowId}`)
}

function buildCell(rowId, cellSpec) {
    const cell = document.createElement('td')
    cellSpec.forEach((inputSpec) => {
        fieldProps = Object.assign({}, inputSpec, { rowId: rowId })
        const field = buildInput(fieldProps)
        cell.appendChild(field)
    })
    return cell
}

function buildInput(fieldProps) {
    let field = document.createElement(fieldProps.tag)
    const attributes = generateAttributes(fieldProps)
    field = setAttributes(field, attributes)
    field.innerText = fieldProps.innerText || ''
    return field
}

function generateAttributes(fieldProps) {
    let attributes = fieldProps.attributes
    attributes.set('class', `input-${fieldProps.rowId}`)
    if(fieldProps.tag === 'button')
        attributes.set('onclick', `${fieldProps.onclick}(${fieldProps.rowId})`)
    return attributes
}

function setAttributes(field, attributes) {
    attributes.forEach((value, key, _) => {
        field.setAttribute(key, value)
    })
    return field
}

function addHead(table) {
    let thead = table.createTHead()
    let thRow = thead.insertRow()
    headers.forEach((header) => {
        let th = document.createElement('th')
        th.innerText = header
        thRow.appendChild(th)
    })
}

function edit(rowId) {
    let row = document.getElementById(`row-${rowId}`)
    row.childNodes.forEach((td, index) => {
        td.childNodes.forEach((input) => {
            let newInput = input.tagName === 'BUTTON' ? transformButton(input) : transformText(input, index) 
            td.replaceChild(newInput, input)
        })
    })
}

function transformButton(button) {
    if(button.innerText === 'Remove')
        return button
    
    button.innerText = 'Save'
    let onclick = button.getAttribute('onclick')
    button.setAttribute('onclick', onclick.replace('edit', 'save'))
    return button
}

function transformText(input, index) {
    let fieldProps = Object.assign({}, cells[index][0], { rowId: input.getAttribute('class').split('-')[1] })
    fieldProps.attributes.set('value', input.innerText)
    console.log(fieldProps)
    return buildInput(fieldProps)
}