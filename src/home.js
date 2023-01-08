import hero from './img/hero.jpg'

export default function home() {
    console.log('-------');
    console.log('HOME');
    const homeSection = document.createElement('section')
    // homeSection.textContent = 'Home text'
    homeSection.id = 'home'
    homeArticle(homeSection)
    return homeSection
}

function homeArticle(homeSection) {
    console.log('----------');
    console.log('HOME article');
    const homeH1 = document.createElement('h1')
        homeH1.textContent = 'Wecome to Odin Coffee'
        homeSection.appendChild(homeH1)
    const homeHero = new Image()
        homeHero.src = hero
        homeHero.alt = 'Odin Coffee Shop'
        homeSection.appendChild(homeHero)
    const homeP = document.createElement('p')
        homeP.textContent = 'Home of the finest coffee from around the world!'
        homeSection.appendChild(homeP)
}