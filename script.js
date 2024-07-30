document.addEventListener("touchstart",function(){},{passive:!0}),document.getElementById("changeimg").addEventListener("click",function(){document.getElementById("fileInput").click()}),document.addEventListener("DOMContentLoaded",e=>{let t=document.getElementById("fileInput"),n=document.getElementById("imageContainer");function l(e){localStorage.setItem("image",e)}function o(){let e=localStorage.getItem("image");e&&a(e)}function a(e){n.innerHTML="";let t=document.createElement("img");t.src=e,n.appendChild(t),imageContainer2.src=e,t.style.width="48px",t.style.borderRadius="48%",t.style.height="48px",t.style.position="absolute",t.style.top="0px",t.style.border=" solid 1.5px #606676"}o(),t.addEventListener("change",function(){let e=this.files[0];if(e){let t=new FileReader;t.onload=function(e){let t=e.target.result;l(t),a(t)},t.readAsDataURL(e)}})});let accountack=document.getElementById("backinfromation");function cloceinfromation(){accountack.style.display="none",navigator.vibrate(39)}function generateRandomNumberCode(e){let t="0123456789",n="";for(let l=0;l<e;l++){let o=Math.floor(Math.random()*t.length);n+=t.charAt(o)}return n}document.getElementById("imageContainer").addEventListener("click",function(){document.getElementById("backinfromation").style.display="block"}),document.getElementById("accountprofile").addEventListener("click",function(){document.getElementById("backinfromation").style.display="block"});let randomNumberCode=generateRandomNumberCode(10);function showmenu(){document.getElementById("backmenu").style.display="block" ,navigator.vibrate(30)}function clocemenu(){document.getElementById("backmenu").style.display="none",document.body.style.overflow="visible",navigator.vibrate(30)}function createinput(){document.getElementById("inputbacka").style.display="block"}function saveText(){document.getElementById("userInput"),document.getElementById("inputbacka").style.display="none",window.location.reload();let e=document.getElementById("userInput").value;localStorage.setItem("userText",e),localStorage.setItem("userText",e);let t=localStorage.getItem("userText");document.getElementById("displayText").textContent=t}localStorage.setItem("randomNumberCode",randomNumberCode),document.getElementById("randomCode").textContent="id : "+randomNumberCode,console.log("Random Number Code:",randomNumberCode),console.log("Saved in Local Storage:",localStorage.getItem("randomNumberCode")),document.getElementById("svgmenushow").addEventListener("click",function(){document.getElementById("backmenu").style.display="block",document.body.style.overflow="hidden"}),document.getElementById("closemenui").addEventListener("click",function(){document.getElementById("backmenu").style.display="none",document.getElementById("locationshow12").style.display="none"}),window.onload=function(){let e=localStorage.getItem("userText");e&&(document.getElementById("profiletxt1").textContent=e,document.getElementById("profiletxt").textContent=e)};let profiletxt1=document.getElementById("profiletxt");function cloceuser(){document.getElementById("inputbacka").style.display="none"}function clocemenudark(){setTimeout(function e(){document.getElementById("backmenu").style.display="none",document.body.style.overflow="visible"},180),navigator.vibrate(30)}function language1trane(){window.location.href="https://gameplay7.netlify.app/"}function language2trane(){window.location.href="https://gameplay7-ar.netlify.app/"}function language3trane(){window.location.href="https://gameplay7-en.netlify.app/"}function language4trane(){window.location.href="https://gameplay7-es.netlify.app/"}function language5trane(){window.location.href="https://gameplay7-fr.netlify.app/"}function clocetranslate(){document.getElementById("languagestarten").style.display="none",document.body.style.overflow="visible",navigator.vibrate(30)}function showselectlang(){function e(){navigator.vibrate(30),document.getElementById("backmenu").style.display="none"}document.getElementById("languagestarten").style.display="block",document.body.style.overflow="hidden",navigator.vibrate(30)}function showshare(){document.getElementById("Sharelinkweb").style.display="block",document.body.style.overflow="hidden";navigator.vibrate(30)}function clocemenu2(){document.getElementById("Sharelinkweb").style.display="none",navigator.vibrate(30)}function copylinkweb(e){!function e(t){navigator.clipboard.writeText(t).then(function(){console.log("Text successfully copied to clipboard")}).catch(function(e){console.error("Error copying text: ",e)})}("https://gameplay7.netlify.app/")}profiletxt1.value.length>2&&(profiletxt1.style.fontSize="1px");let txtcountry=document.getElementById("country").value;function locationshow(){document.getElementById("locationshow12").style.display="block",navigator.vibrate("30")}function clocetxtlocation(){document.getElementById("locationshow12").style.display="none",navigator.vibrate("30")}txtcountry="Egypt",alert("");const button=document.getElementById("messangericonshaer"),textToShare="نص للمشاركة\nرابط";button.addEventListener("click",()=>{let e=document.createElement("a");e.href=`fb-messenger://share?text=${encodeURIComponent("نص للمشاركة\nرابط")}`,e.click()});


document.getElementById("svgmenushow").addEventListener('click',function(){
  
  document.getElementById('backmenu').style.display="block"
  
  document.body.style.overflow="hidden";
  
  
})


document.getElementById('mod').setAttribute('translate', 'no');






function showsearch() {
  // Tab to 
  document.getElementById('searchback').style.display="block"
 navigator.vibrate('30');
 
 document.body.style.overflow="hidden"
 
}

document.documentElement.setAttribute('translate', 'no');
function clocebacksearch() {
  // Tab to edit
  
 document.getElementById('searchback').style.display="none"
 navigator.vibrate('30');
  document.body.style.overflow="visible"
}


let divexit = document.getElementById('exitsearhback');


divexit.addEventListener('click', function(){
  
  document.getElementById('searchback').style.display="none"
 navigator.vibrate('30');
 
 document.body.style.overflow="hidden"
  
})



document.getElementById('svgsearchico').addEventListener('click', function(){
  
  
  document.getElementById('searchback').style.display="block"
 navigator.vibrate('30');
 
 document.body.style.overflow="hidden"
})



// تعيين سمة translate="no" إلى جميع عناصر HTML في الصفحة
document.documentElement.setAttribute("translate", "no");

var allElements = document.getElementsByTagName("*");

for (var i = 0; i < allElements.length; i++) {
    allElements[i].setAttribute("translate", "no");
}
