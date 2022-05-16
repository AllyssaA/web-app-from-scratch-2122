const loading = document.querySelector('.loading')
// remove loading animation 
export function loadingIsDone() {
    loading.remove()
}

// states
export function uiState(typeState, param = '') {
    const header = document.querySelector('.title h1')
    // const headerText = document.querySelector('.title h2')
    const h1Text = document.querySelector('.collections h1')
    const element = document.querySelector('.collections')
    const collection = document.querySelector('.collection')

    // when something is wrong with data/api
    if(typeState == 'noData') {
        header.textContent = "Something went wrong, can't retrieve data."
    } 
    // search doesn't return anything
    else if(typeState == 'noResult') {
        h1Text.textContent = `Couldn't find any results for: ${param}`
        const h2Text = document.createElement('h2')
        const text = document.createTextNode('Try searching for different artworks.')
        h2Text.appendChild(text)
        element.appendChild(h2Text)
        collection.remove();
    } 
    // searched 
    else if(typeState == 'searched') {
        h1Text.textContent = `Search results for: ${param}`
    }
}