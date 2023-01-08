export default function menu() {
    console.log('-------');
    console.log('MENU');
    const menuSection = document.createElement('section')
    menuSection.textContent = 'Menu text'
    menuSection.id = 'menu'
    return menuSection
}