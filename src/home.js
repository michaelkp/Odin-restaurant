export default function home() {
    console.log('-------');
    console.log('HOME');
    const homeSection = document.createElement('section')
    homeSection.textContent = 'Home text'
    homeSection.id = 'home'
    return homeSection
}