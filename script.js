
let header = document.getElementById('header');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}



// تبديل الوضع المظلم وحفظ التفضيل في localStorage
function toggleDarkMode() {
    var element = document.body;
    navigator.vibrate(20)
    element.classList.add('dark-mode');

    if (element.classList.contains('dark-mode')) {
      
document.getElementById('share').style.background="white"

document.body.style.overflow="visible"


var divc =  document.getElementById('darkone').style.border="solid 1.5px #1A7CDC";



localStorage.setItem("div","divc");

    
document.getElementById('lightmodediv').style.background="#E2E2E2";

document.getElementById('lightmodediv').style.border="none";



        localStorage.setItem('theme', 'dark');
  document.getElementById('backmenu').style.display="none"
        
    } else {
        localStorage.removeItem('theme');
  
    }
}

function searchclick() {
  // Tab to edit
  navigator.vibrate(20)
}

function menuclick() {
  // Tab to edit
  navigator.vibrate(20);
  document.getElementById('backmenu').style.display="block"
  
  
  var view = document.getElementById('backmenu').style.display="block";
  
  document.body.style.overflow="hidden"
  
  
  
  localStorage.setItem("menu","view");

}

var menur = document.getElementById('backmenu');













function clocemenu() {
  // Tab to edit
document.getElementById('backmenu').style.display="none";
navigator.vibrate(20)

  document.body.style.overflow="visible"
}


function toggleLightMode() {
  // Tab to edit
  var element = document.body;
  element.classList.remove('dark-mode');
localStorage.removeItem('theme');


      
document.getElementById('backmenu').style.display="none"
 navigator.vibrate(20);
 document.body.style.overflow="visible"
 document.getElementById('lightmodediv').style.background="#EBF5FF";
document.getElementById('lightmodediv').style.border="solid 1.5px #1A7CDC";
 
 document.getElementById('darkone').style.background="#1E222DFA";
document.getElementById('darkone').style.border="none";

 document.getElementById('share').style.background="#181818"
 
}


var menushare = document.getElementById('share');

var btnshare = document.getElementById('sharebtnimg');

var btnback = document.getElementById('backbtnimg');

btnback.addEventListener('click',function(){
menushare.style.display="none"
})

function shareQr() {
  // Tab to edit
  document.getElementById('backmenu').style.display="none"
  menushare.style.display="block"
  
}











const link = 'https://gameplay7.netlify.app/'; // Replace with the link you want to share
const text = 'افضل موقع تنزيل العاب مدفوعة ومهكرة مجانا '; // Replace with the text you want to share

btnshare.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
        title: 'Shared Link',
        text,
        url: link,
      })
      .then(() => console.log('Shared successfully!'))
      .catch(error => console.error('Error sharing:', error));
  } else {
    console.log('Web Share API not supported in this browser.');
  }
});




const buttondownload = document.getElementById('downloadimg');

const imageContainer = document.getElementById('imgdhare');

buttondownload.addEventListener('click', () => {
  const image = document.createElement('img');
  image.src = 'image.jpg'; // replace with your image URL
  image.alt = 'My Image';
  imageContainer.appendChild(image);
});





if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
      
      
        ios.innerHTML = "Battery level is: " + battery.level * 100 + "%";
        
        
        if (battery.level * 100 <= 15) {
      document.getElementById('bettary').style.display="block"
      
      

      
    }
        
    });

    
} 


setTimeout(ios, 3600)
function ios() {
  // Tab to edit

document.getElementById('bettary').style.display="none"
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

function myFunction(x) {
  if (x.matches) { // If media query matches
    
    

    document.getElementById('seachicon').style.marginRight="50px"

    
    
  } 
}


document.getElementById('clocesearch').addEventListener('click', function(){
  document.getElementById('searchback').style.display="none"
  navigator.vibrate(20)
  document.body.style.overflow=""
})

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 700px)")

document.getElementById('seachicon').style.marginRight="0px"


document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Simulate a loading time
  setTimeout(function() {
    loader.style.display = 'none';
    
  },1000); // Change this time to however long you want the loader to show
});







function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}










document.getElementById('seachicon').addEventListener('click',function(){
  
  document.getElementById('searchback').style.display="block"
  document.body.style.overflow="hidden"
})





function addAltAttrs() {
    // احصل على جميع الصور
    let images = document.querySelectorAll("img");
    
    // قم بالتحقق من جميع الصور وأضف نص "alt" إذا كان غير موجود (ولكن العنوان موجود)
    for (let i = 0; i < images.length; i++) {
        if (images[i].title && !images[i].alt) {
            images[i].alt = images[i].title;
        }
    }
}

// استدعاء الدالة لتغيير "alt" لجميع الصور
addAltAttrs();



document.getElementById('myImage').addEventListener('contextmenu', function(event) {
            event.preventDefault();
            document.getElementById('iconprivce').style.display="block"
            
       setTimeout(imgnone, 2000);
       
       
       
      function imgnone() {
        // Tab to edit
        document.getElementById('iconprivce').style.display="none"
      }
      
        });
            
            
            
            
            
            
let images = document.querySelectorAll("img");
images.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            document.getElementById('iconprivce').style.display="block"
            
       setTimeout(imgnone, 2000);
       
       
       
      function imgnone() {
        // Tab to edit
        document.getElementById('iconprivce').style.display="none"
      }
      
        });
            
            
            
            
            
            
            

    
