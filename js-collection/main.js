function remove(id) {
    row = document.getElementById(`row-${id}`)
    row.parentNode.removeChild(row)
}