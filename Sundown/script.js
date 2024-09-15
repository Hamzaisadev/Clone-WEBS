
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC = document.querySelector("#elem-container")
var fImg = document.querySelector("#fixed-images")
elemC.addEventListener("mouseenter", function() {
    fImg.style.display = "block"
})
elemC.addEventListener("mouseleave", function() {
    fImg.style.display = "none"
})

var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter", function() {
    var videoUrl = elem1.getAttribute("data-media")
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);

    video.width = videoContainer.offsetWidth;
    video.height = videoContainer.offsetHeight;
})



var elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter", function() {
    var imgUrl = elem2.getAttribute("data-media")
    const img = document.createElement('img');
    img.src = imgUrl;
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(img);

    img.width = videoContainer.offsetWidth;
    img.height = videoContainer.offsetHeight;
})






var elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter", function() {
    var videoUrl = elem3.getAttribute("data-media")
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
    
    video.width = videoContainer.offsetWidth;
    video.height = videoContainer.offsetHeight;
    })


    

var elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter", function() {
    var videoUrl = elem4.getAttribute("data-media")
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true
    video.loop = true;
    video.muted = true;
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
    
    video.width = videoContainer.offsetWidth;
    video.height = videoContainer.offsetHeight;
    })


    


var elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter", function() {
    var videoUrl = elem5.getAttribute("data-media")
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
    
    video.width = videoContainer.offsetWidth;
    video.height = videoContainer.offsetHeight;
    })


    






    
    
    
    
    

    
    
    var elem6 = document.querySelector("#elem6")
    elem6.addEventListener("mouseenter", function() {
        var videoUrl = elem6.getAttribute("data-media")
        const video = document.createElement('video');
        video.src = videoUrl;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(video);
        
        video.width = videoContainer.offsetWidth;
        video.height = videoContainer.offsetHeight;
    })
    
    
var elem7 = document.querySelector("#elem7")
elem7.addEventListener("mouseenter", function() {
    var imgUrl = elem7.getAttribute("data-media")
    const img = document.createElement('img');
    img.src = imgUrl;
            
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(img);
        
    img.width = videoContainer.offsetWidth;
    img.height = videoContainer.offsetHeight;
    })
    


var elem8 = document.querySelector("#elem8")
elem8.addEventListener("mouseenter", function() {
    var videoUrl = elem8.getAttribute("data-media")
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
    
    video.width = videoContainer.offsetWidth;
    video.height = videoContainer.offsetHeight;
    })


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });