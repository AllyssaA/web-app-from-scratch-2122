const loading = document.querySelector('.loading')

export function loadingIsDone() {
    console.log('removed loader')
    loading.remove()
}

export function uiState(typeState, param = '') {
    const header = document.querySelector('.title h1')
    const headerText = document.querySelector('.title h2')

    if(typeState == 'noData') {
        header.textContent = "Something went wrong, can't retrieve data."

    } else if(typeState == 'noResult') {
        header.textContent = `Didn't find any results for: ${param}.`
        headerText.textContent = 'Try searching for different artworks.'
    }
}