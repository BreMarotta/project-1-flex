
/** 
 *how to think of events(3 question rule)* 
 *at what time can i do this events.
 *whats going to trigger event(click)
 *Effect (display and homepage)
 /**globals **/
 document.addEventListener("DOMContentLoaded"), () => {
  renderListHomePage();
  }
// NODE GETTERS
const mainDiv = document.getElementById("main");

/**templates **/
const homepagesTemplate = () => {
  return
     <h1 class="centre-align"> cat tracker app</h1>
} 
/**renders**/
const renderListHomePage = () => {
  mainDiv.innerHTML =homepagesTemplate();
}
// eventListeners
function AttachListCatClickEvent() {
  listCatLink().addEventListener("click",RenderListCatPage)
}
/**when dom loads  **/

function attachHomepageClickEvent() {
  HomePageLink().addEventListener("click",RenderHomePage)
}
//eventHandlers
function RenderHomepage()
  //create the Html elements for the homepage
  //post request to render cat magesContainer
  //reset mainDiv();
 
h1.InnerText ="cat list page"
h1.StyleMarginTop ="0"
base_url = 'https://api.thecatapi.com/v1/images/search?limit=10'
  document.addEventListener("DOMContentLoaded", () => {
    renderCatImages();
    
    function renderCatImages(){
      fetch (base_url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Array.from(data).forEach(cat => {
          const img = document.createElement('img')
          const catImageContainer = document.getElementById('catContainer')
          img.src=cat.url
          catImageContainer.append(img)
      })
    })}
  })
  function listCatLink(catImageContainer)
  catImageContainer.addEventListener('click')
   (e); {
   e.preventDefault()
   const catImageContainer = e.Target.querySelector(catImageContainer)
   function catImageContainer(renderCatImages) {
   renderCatImages(CatImageContainer)
   CatImageContainer.removeEventListener(click)
   }
   
   }
  mainDiv().AppendChild(h1);
  mainDiv().AppendChild(p);
 
 
 resetMainDiv();
const h1 = document.CreateElement("h1");
const ul = document.CreateElement("ul");
const li = document.CreateElement("li");
  
//DomContentLoaded//
document.addEventListener("DomContentLoaded"), () => {
RenderListHomepage();
}
AttachListCatClick();
AttachListCatClick();
AttachHomePageClickEvent();