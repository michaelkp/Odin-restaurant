export default function about() {
    console.log('-------');
    console.log('ABOUT');
    const aboutSection = document.createElement('section')
    aboutSection.textContent = 'About text'
    aboutSection.id = 'about'
    return aboutSection
}