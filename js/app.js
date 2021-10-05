<<<<<<< HEAD
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
    createNavBar(sections, navmenu, fragment);                                                          // call createNavBar() Function

    document.addEventListener('scroll', () => {                                                         // Add Scroll Event Listener to to the document
      // This line call checkIsVisible() function to check if section in the view
      checkIsVisible(sections);                             
    })

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
  if(rect.y >= 0 && (rect.y <= 200 && rect.y < window.innerHeight)){ 
    element.classList.add('your-active-class');                                 //Add Class to section 
  }else{
    element.classList.remove('your-active-class');                              //Remove Class to section
  }

} // End For Loop 

} // End Function 

=======
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
    createNavBar(sections, navmenu, fragment);                                                          // call createNavBar() Function

    document.addEventListener('scroll', () => {                                                         // Add Scroll Event Listener to to the document
      // This line call checkIsVisible() function to check if section in the view
      checkIsVisible(sections);                             
    })

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
  if(rect.y >= 0 && (rect.y <= 200 && rect.y < window.innerHeight)){ 
    element.classList.add('your-active-class');                                 //Add Class to section 
  }else{
    element.classList.remove('your-active-class');                              //Remove Class to section
  }

} // End For Loop 

} // End Function 

>>>>>>> c9862d6e6d55afebfd3f115f6b7f524153ff5e1f
