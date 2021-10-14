/*
      This line calls the initAll() function
      when the window finishes loading.
*/
window.onload = initAll();

function initAll(){                                                                                     // This line begin function 
  
  if(document.getElementById){                                                                          // Check if the object exits 
    const sections = document.querySelectorAll('section');                                              // Get all section in document 
    const navmenu = document.getElementById('navbar__list');                                            // Get ul By ID and store in var
    const fragment = document.createDocumentFragment();                                                 // create documnet fragment
    createNavBar(sections, navmenu, fragment); 

    document.addEventListener('scroll', () => {                                                         // Add Scroll Event Listener to to the document
      // This line call checkIsVisible() function to check if section in the view
      checkIsVisible(sections);      
    })                                                        // call createNavBar() Function

  }else{
    //Add Code Here
  }
}

function createNavBar(allSection, navBAr, frag){

  const sections = allSection;
  const navBarList = navBAr;
  const docFragment = frag;

  sections.forEach(section => {
    const navList = document.createElement('li');               // create li list 
    const navListSub = document.createElement('a');             // create link
    const navListSubText = document.createTextNode(section.dataset.nav); // Add data-* Attr from 
  
    navListSub.setAttribute('data-link',section.id);
  
    navListSub.classList.add('menu__link');
    navListSub.appendChild(navListSubText);
    navList.appendChild(navListSub);
    docFragment.appendChild(navList);
  
    navListSub.addEventListener('click', () => {
    section.scrollIntoView({'behavior':'smooth'});
  })
  
  });
  navBarList.appendChild(docFragment);  
}

/*
This Function Check is section visible in view   

*/ 
const checkIsVisible = (elements) => {

  for(let element of elements){ 
    let rect = element.getBoundingClientRect();
    if(rect.y >= 0 && (rect.y <= 120 && rect.y < window.innerHeight)){ 
      element.classList.add('your-active-class');                                 //Add Class to section
      activeLinks(element); 
    }else{
      element.classList.remove('your-active-class');                              //Remove Class to section
    }
  
  } // End For Loop 
  
  } // End Function 

const activeLinks = (e) => {

  const activeLink = document.querySelectorAll('[data-link]');
  const element = e;
  for(let i = 0; i < activeLink.length; i++){
    
    if(activeLink[i].textContent === element.dataset.nav){
      activeLink[i].classList.add('menu-link-active');
      console.log(activeLink[i].textContent);
    }else{
      activeLink[i].classList.remove('menu-link-active');
    }
  }

}
  
