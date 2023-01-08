console.log('test');

import './style.css'

const content = document.querySelector('.content')

const header = document.createElement('header')
    header.textContent = 'Header'
    content.appendChild(header)

const main = document.createElement('main')
    content.appendChild(main)

const nav = document.createElement('ul')
    header.appendChild(nav)

let navList = ['Home', 'Menu', 'About']
navList.forEach((item) => {
    const navListItem = document.createElement('li')
        navListItem.classList.add('nav-li')
        navListItem.id = item
        navListItem.textContent = item
        nav.appendChild(navListItem)
        console.log(item);

        navListItem.addEventListener('pointerup', (item) => {
            console.log('event test ------------');
            if(navListItem.id === 'Home') console.log('Home');
            if(navListItem.id === 'Menu') console.log('Menu');
            if(navListItem.id === 'About') console.log('About');
        })
})

