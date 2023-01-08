import menuImg from './img/menu.jpg'
import coffee from './img/coffee.jpg'
import milkshake from './img/milkshake.jpg'
import snacks from './img/snacks.jpg'

export default function menu() {
    console.log('-------');
    console.log('MENU');
    const menuSection = document.createElement('section')
    menuSection.id = 'menu'
    menuArticle(menuSection)
    return menuSection
}

function menuArticle(menuSection) {
    console.log('----------');
    console.log('menu article');
    const menuTitle = document.createElement('div')
        menuTitle.classList.add('menu-title')
        menuSection.appendChild(menuTitle)
    const menuH1 = document.createElement('h1')
        menuH1.textContent = 'Our Menu at Odin Coffee'
        menuTitle.appendChild(menuH1)
    const menuHero = new Image()
        menuHero.src = menuImg
        menuHero.alt = 'menu Odin Coffee Shop'
        menuHero.id = 'menu-img'
        menuTitle.appendChild(menuHero)
    const menuP = document.createElement('p')
        menuP.textContent = 'Welcome to Odin Coffee. We are coffee lovers with years of experience working with the best beans, and equipment availible.'
        menuSection.appendChild(menuP)
    const menuItems = document.createElement('section')
        menuItems.classList.add('menu-items')
        menuSection.appendChild(menuItems)
    const menuCoffee = document.createElement('div')
        menuCoffee.classList.add('menu-coffee')
    const menuCoffeeImg = new Image()
        menuCoffeeImg.classList.add('menu-items-img')
        menuCoffeeImg.src = coffee
        menuCoffeeImg.id = 'menu-coffee'
        menuCoffeeImg.alt = 'Coffee from the Odin Coffee menu.'
        menuItems.appendChild(menuCoffee)
        menuCoffee.appendChild(menuCoffeeImg)
    const menuCoffeeText = document.createElement('p')
        menuCoffeeText.textContent = `Odin Coffee presents only the finest beans from around the world!`
        menuCoffee.appendChild(menuCoffeeText)
    const menuMilkshake = document.createElement('div')
        menuMilkshake.classList.add('menu-milkshake')
        menuItems.appendChild(menuMilkshake)
    const menuMilkshakeImg = new Image()
        menuMilkshakeImg.classList.add('menu-items-img')
        menuMilkshakeImg.src = milkshake
        menuMilkshakeImg.id = 'menu-milkshake'
        menuMilkshakeImg.alt = 'A milkshake from the Odin Coffee menu.'
        menuMilkshake.appendChild(menuMilkshakeImg)
    const menuMilkshakeText = document.createElement('p')
        menuMilkshakeText.textContent = `Odin Coffee also offers wonderful milkshakes for our friends that don't drink coffee.`
        menuMilkshake.appendChild(menuMilkshakeText)
    const menuSnacks = document.createElement('div')
        menuSnacks.classList.add('menu-snacks')
        menuItems.appendChild(menuSnacks)
    const menuSnacksImg = new Image()
        menuSnacksImg.classList.add('menu-items-img')
        menuSnacksImg.src = snacks
        menuSnacksImg.id = 'menu-snacks'
        menuSnacksImg.alt = 'Delicious snacks from the Odin Coffee bakery.'
        menuSnacks.appendChild(menuSnacksImg)
    const menuSnacksText = document.createElement('p')
        menuSnacksText.textContent = `Get delicious snacks from our bakery!`
        menuSnacks.appendChild(menuSnacksText)
}