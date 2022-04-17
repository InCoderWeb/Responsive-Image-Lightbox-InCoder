// --------------------- Created By InCoder ---------------------

let images = document.querySelectorAll('.image')
lightBoxContainer = document.querySelector('.lightBoxContainer')
containerBody = document.querySelector('.lightBoxContainer .body')
nextBtn = document.querySelector('.next')
preBtn = document.querySelector('.pre')
image = containerBody.querySelector('img')
wrapper = document.querySelector('.wrapper')
closeBtn = document.querySelector('.closeBtn')
totalImg = document.querySelector('.total')
currentImg = document.querySelector('.current')

for (let i = 0; i < images.length; i++) {
    let newindex = i
    images[i].addEventListener('click', () => {
        function openPreview() {
            let imageURL = images[newindex].querySelector('img').src
            image.src = imageURL
            currentImg.innerText = `Image ${newindex + 1} of ${images.length}`
            if(newindex == 0){
                preBtn.style.display = 'none';
            }else{
                preBtn.style.display = 'grid';
            }
            if(newindex >= images.length - 1){
                nextBtn.style.display = 'none';
            }else{
                nextBtn.style.display = 'grid';
            }
            lightBoxContainer.classList.add('show')
        }
        preBtn.addEventListener('click', () => {
            newindex--
            if(newindex == 0){
                openPreview()
                preBtn.style.display = 'none';
            }else{
                openPreview()
            }
        })
        nextBtn.addEventListener('click', () => {
            newindex++
            if(newindex >= images.length - 1){
                openPreview()
                nextBtn.style.display = 'none';
            }else{
                openPreview()
            }
        })
        openPreview()
        closeBtn.addEventListener('click', () => {
            preBtn.style.display = 'grid';
            nextBtn.style.display = 'grid';
            lightBoxContainer.classList.remove('show')
        })
        
        lightBoxContainer.addEventListener('click', (e) => {
            if(e.target !== e.currentTarget) return
            preBtn.style.display = 'grid';
            nextBtn.style.display = 'grid';
            lightBoxContainer.classList.remove('show')
        })
    })
}
