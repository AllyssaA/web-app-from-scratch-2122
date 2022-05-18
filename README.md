
# Rijksmuseum collection

![https://allyssaa.github.io/web-app-from-scratch-2122/spa/](https://github.com/AllyssaA/web-app-from-scratch-2122/blob/main/spa/assets/logo.png)
# Demo

[Live demo](https://allyssaa.github.io/web-app-from-scratch-2122/spa/)


# Description

Rijksmuseum collection is a single page application using the Rijksmuseum API. You can use this app to lookup your favorite artwork from the comfort of your home.


# Concept

User story: As an art lover, `I want` to be able to search and view art from the Rijksmuseum at home, `so that` I can still enjoy art during a lockdown.

# Features
- **Featured artworks**<br>
    These featured artworks changes daily. Come back everyday to discover new artworks or artists.
- **Search artworks**<br>
    Lookup your favorite artist or artwork.
- **Details artwork**<br>
    See your favorite work of art in details.

# Rijksmuseum API

To create this single page app I used the [Rijksmuseum API](https://data.rijksmuseum.nl/object-metadata/api/).

## Featured artworks request API

To render the default page to see featured artworks I used the following params 

|  key  |  ps |
|----------|:------:|
| {key} | 20 |


`https://www.rijksmuseum.nl/api/nl/collection?key={api-key}&ps=20`

## Search request API
To search through the API I used the following params

|  key  |      q     |  ps |
|----------|:-------------:|------:|
| {key} |  {searchInput}| 20 |



`https://www.rijksmuseum.nl/api/nl/collection?key={api-key}&q=Gogh&ps=20`

## Example detail request API

To see a detail page, I used the following params


|  id  |      key     |  
|----------|:-------------:
| {id} |  {key}| 



`https://www.rijksmuseum.nl/api/nl/collection/${id}${key}`




# Installation

Clone the project

`git clone https://github.com/AllyssaA/web-app-from-scratch-2122.git`


## Extension
I used an extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from Visual Studio Code to run this project locally.

    
# Activity diagram
<img src="https://github.com/AllyssaA/web-app-from-scratch-2122/blob/main/spa/assets/activitydiagram.png" width="100%"/>



# Backlog

TODO

- [x] details article image styling
- [x] error state
- [x] ui stack
- [x] improve Activity Diagram
- [x] Feedback to user when page is loading
- [x] remove image placeholder to something that makes sense



# Sources
- [Rijksmuseum API Documentation](https://data.rijksmuseum.nl/object-metadata/api/)
- Examples and slides from [cmda-minor-web](https://github.com/cmda-minor-web/web-app-from-scratch-2122)
- Help/advice from [@bommezijn](https://github.com/bommezijn)
