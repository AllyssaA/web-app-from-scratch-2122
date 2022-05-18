const loading = document.querySelector('.loading')
// remove loading animation 
export function loadingIsDone() {
    loading.remove()
}

// states
export function uiState(typeState, param = '') {
    const h1Text = document.querySelector('.collections h1')
    const element = document.querySelector('.collections')
    const collection = document.querySelector('.collection')
    const h2Text = document.createElement('h2')
    const removeH2 = document.querySelector('.collections h2')

    // when something is wrong with data/api
    if(typeState == 'noData') {
        h1Text.textContent = 'Something went wrong, cannot retrieve data.'
    } 
    // search doesn't return anything
    else if(typeState == 'noResult') {
        h1Text.textContent = `Couldn't find any results for: ${param}`
        const text = document.createTextNode('Try searching for different artworks.')
        h2Text.appendChild(text)
        element.appendChild(h2Text)
        collection.remove();
    } 
    // searched 
    else if(typeState === 'searched') {
        if (removeH2 >= ""){
            console.log('nothing to remove')
        } else{
            removeH2.remove();
            console.log('removed executed')
        }
        h1Text.textContent = `Search results for: ${param}`
    }
    else if(typeState === 'entree'){
        h1Text.textContent = 'Featured artworks'
    } 
    
}