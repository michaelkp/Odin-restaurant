import aboutImg from './img/about.jpg'

export default function about() {
    console.log('-------');
    console.log('ABOUT');
    const aboutSection = document.createElement('section')
    aboutSection.id = 'about'
    aboutArticle(aboutSection)
    return aboutSection
}

function aboutArticle(aboutSection) {
    console.log('----------');
    console.log('about article');
    const aboutTitle = document.createElement('div')
        aboutTitle.classList.add('about-title')
        aboutSection.appendChild(aboutTitle)
    const aboutH1 = document.createElement('h1')
        aboutH1.textContent = 'The Odin Coffee Story'
        aboutTitle.appendChild(aboutH1)
    const aboutHero = new Image()
        aboutHero.src = aboutImg
        aboutHero.alt = 'About Odin Coffee Shop'
        aboutHero.id = 'about-img'
        aboutTitle.appendChild(aboutHero)
    const aboutP = document.createElement('p')
        aboutP.textContent = 'Welcome to Odin Coffee. We are coffee lovers with years of experience working with the best beans, and equipment availible.'
        aboutSection.appendChild(aboutP)
}