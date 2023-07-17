const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}   

// mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toogle('active')
    }
}))

//sorter
const sorter = document.querySelector('.sort-list');
if(sorter) {
  const sortLi = sorter.querySelector('li');
  sorter.querySelector('.opt-trigger').addEventListener('click', function() {
    sorter.querySelector('ul').classList.toggle('show');
  });
  sortLi.forEach((item) => item.addEventListener('click', function() {
    sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

    this.classList.add('active');
    sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
    sorter.querySelector('ul').classList.toggle('show')
  }))
}




// slider

const swiper = new Swiper('.sliderbox', {
    // // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // // Navigation arrows
    //   navigation: {
    //    nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

//   Carousel
 const carousel = new Swiper('.carouselbox', {
//     // // Optional parameters
//     // direction: 'vertical',
     loop: true,
     spaceBetween: 30,
    slidesPerview: 'auto',
    centeredSlides: true,
  
//     // // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },
  
//     // Navigation arrows
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
//   breakpoints: {
//     481: {
//        slidesPerview: 2,
//     slidesPergroup: 1,
//        centeredSlides: false,
//  },
//  640: {
//   slidesPerview: 3,
//     slidesPergroup: 3,
//    centeredSlides: false,
// },
//  992: {
//     slidesPerview: 4,
//    slidesPergroup: 4,
//   centeredSlides: false,
//  },
//  }
  });

// Search bar 
// getting all required elements
const searchWrapper = document.querySelector(".search-float");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".search");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArzray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];















  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA3bvI01e5XtUDF_-oPW-EPUl0M42kUjuI",
    authDomain: "wisemonk-67a93.firebaseapp.com",
    projectId: "wisemonk-67a93",
    storageBucket: "wisemonk-67a93.appspot.com",
    messagingSenderId: "1079565482098",
    appId: "1:1079565482098:web:6fd4df25827027e2d6eaeb"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(function (user){
  if (user){
      var email = user.email;
      var user = document.getElementById("user");
      var text = document.createTextNode(email);
      user.appendChild(text);
      console.log(user);

      //is signed in
  } else {
      alert("user not authenticated, kindly login or signup");
      window.location = "home.html";
  }
});

//logout function

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout clicked");
  auth.signOut();
  alert("Signed out");
  window.location = "home.html";
}) 