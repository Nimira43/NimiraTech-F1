const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')
        div.style.backgroundImage = 
            `
            url(images/slideshow/bg-${i}.jpg)
            `
            document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()