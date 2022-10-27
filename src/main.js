import dataDogs from './data.js'
const root = document.getElementById('root')

const onlyDogs = dataDogs.dogs
console.log(onlyDogs)

onlyDogs.forEach (dog => {
    const card = document.createElement('div')
    card.className = "card" 

    const images = document.createElement('img')
    images.src = dog.image

    const breed = document.createElement('h2')
    breed.textContent = dog.breed

    card.append(images, breed)
    root.append(card)
})

