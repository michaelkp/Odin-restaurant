console.log('test');

import './style.css'
import about from './about.js'
import home from './home.js'
import menu from './menu.js'

const content = document.querySelector('.content')

const header = document.createElement('header')
    header.textContent = 'Header'
    content.appendChild(header)

const main = document.createElement('main')
    content.appendChild(main)

const nav = document.createElement('ul')
    header.appendChild(nav)
main.appendChild(home())
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
                const tabList = document.querySelectorAll('section')
                console.log(tabList);
                if(navListItem.id === 'Home') {
                    main.replaceChild(home(), ...tabList)
                }
                if(navListItem.id === 'Menu') {
                    main.replaceChild(menu(), ...tabList)
                }
                if(navListItem.id === 'About') {
                    main.replaceChild(about(), ...tabList)
                }
            })
    })
