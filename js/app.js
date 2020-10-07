  
const projects = [
  {
  image : "project01",
  imageSmall: "p01",
  title: "my first personal page",
  description: "customize a personal online profile by adding graphics and text to improve the look of a web page",
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/techdegree-project1/"
},

{
  image : "project02",
  imageSmall: "p02",
  title: "mobile-first responsive layout",
  description: "create a mobile-first web with a layout that adjusts to fit any screen size",
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/techdegree-project2/"
},

{
  image : "project03",
  imageSmall: "p03",
  title: "registration form",
  description: "create a responsive registration form using a variety of form     elements",  
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/techdegree-project3/"
},
{
  image: "project04",
  imageSmall: "p04",
  title: "web style",
  description: "create a style guide for Bootstrap",  
  technologies: "['html', 'sass']",
  url: "https://silviaramos15.github.io/techdegree-project4/"
},

{
  image: "project05",
  imageSmall: "p05",
  title: "interactive photo gallery",
  description: "create an interactive photo gallery and adding a searcheable input bar",  
  technologies: "['html', 'css', 'javascript']",
  url: "https://silviaramos15.github.io/techdegree-project5/"
},

{
  image: "project06",
  imageSmall: "p06",
  title: "game show app",
  description: "create a browser version of Wheel of Success game",  
  technologies: "['html', 'css', 'javascript]",
  url: "https://silviaramos15.github.io/techdegree-project6/"
},

{
  image: "project07",
  imageSmall: "p07",
  title: "dashboard",
  description: "creating tables, charts, graphics and other user interface components",  
  technologies: "['html', 'css', 'javascript']",
  url: "https://silviaramos15.github.io/techdegree-project07/"
},
{
  image: "project08",
  imageSmall: "p08",
  title: "employee directory",
  description: "create an employee directory by communication with an API",  
  technologies: "['html', 'css', 'javascript']",
  url: "https://silviaramos15.github.io/techdegree-project8/"
},
{
  image: "project-A",
  imageSmall: "pa",
  title: "momentum",
  description: "create an online responsive form",  
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/momentum-master"
},

{
  image: "project-B",
  imageSmall: "pb",
  title: "adoption website",
  description: "create a pets adoption website with forms and SVGs",  
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/paws/"
},

{
  image: "project-C",
  imageSmall: "pc",
  title: "social media challenge",
  description: "recreate a social media page by using SVGs images",  
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/social-challenge/"
},

{
  image: "project-D",
  imageSmall: "pd",
  title: "IOS app",
  description: "recreate the popular ios settings app by using flexbox",  
  technologies: "['html', 'css']",
  url: "https://silviaramos15.github.io/ios-settings/"
},
]



// Active classes to achieve: 
// --- opening/closing panels
// --- rotate headers
// --- show/hide content per section

const panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
  panel.addEventListener("click", e => {
    let activePanel = document.querySelector(".active");
    activePanel.classList.remove("active");
    e.target.closest(".panel").classList.toggle("active");
   
  });
});
// --------------------
// Arrows on orange panel

const arrowRight = document.querySelector('.right');
const arrowleft = document.querySelector('.left');
const intro = document.querySelector('.intro');
const skills = document.querySelector('.skills');

arrowRight.addEventListener('click', () => {
article(intro, skills);
arrows(arrowRight, arrowleft);
})

arrowleft.addEventListener('click', () => {
  article(skills, intro);
  arrows(arrowleft, arrowRight);
})
// --------------------
  // building the overlay modal for the inner HTML 
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close')

  // Close the modal
    modalClose.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });

// Display facts 
const me = document.querySelector('#me');
const facts = document.querySelector('.me');
const arrow = document.querySelector('.leftMe');
me.addEventListener('click', () => {
    article(intro, facts);
    arrows(arrowRight, arrow);
})
arrow.addEventListener('click', () => {
  article(facts, intro);
  arrowRight.style.display = 'inline-block';
})
// function to display/hide articles
function article (art1, art2) {
art1.style.display = 'none';
art2.style.display = 'block';
}
// function to display arrows
function arrows (arr1, arr2) {
  arr1.style.display = 'none';
 arr2.style.display = 'inline-block';
}

    // FUNCTION TO DISPLAY INFO 

    function displaySkills (id, title, description) {
      const skills =`
      <div class="text-container">
              <h2 class="skill_title">${title}</h2>
              <p class="Description">${description}</p>
              <hr/>
              
      </div>
      `;
      
            // making the overlay visible
      const element = document.getElementById(id);
      element.addEventListener('click', () => { 
      overlay.classList.remove('hidden');
      modalContainer.innerHTML = skills;
      });
      return skills;
    }

    displaySkills ('designer', 'Designer', 'It is all about the user experience with a generous splash of creative juices');
    displaySkills ('optimize', 'Optimize', 'Did you know you could risk losing traffic when a site takes over 2.5-3 seconds to load? Nobody likes to wait, but we can make it less of a pain. I look at the technical performance as the driver of your website.');
    displaySkills ('developer', 'Developer', 'Your dream ideas can become true. I work with my heart to make them real. And if you need some sort of inspiration, let me get to know you to build something beautiful together.');
    displaySkills ('bugs', 'Bugs Fix', 'Jumped into a 404, 500 error or any other sort of bug? Working and learning from my colleagues has tough me to read and understand code to identify current problems or potential issues.');
    displaySkills ('responsive', 'Responsive', '52% of global traffic is generated by mobiles. I build all my pages so that the content displayed adapts to the size of the display window the visitor uses.');
    displaySkills ('tech', 'Technologies', 'HTML5, CSS, SASS, BootStrap, JavaScript, JQuery, JSON, Fetch, Node.js, SQL, Postgress, GIT, APIs, GraphQL...and the list will continue...');

// -------------------------------------------------->



// Display modal for the form

const modalForm = document.querySelector('.modal-content_form');

const displayForm =`
<div class="form-container">
<h2 class="h2Form">Do not be shy and say hi!<h2>
<form method="post" action="contact.php">
<div class="flex-form">
<label for="sender">Name:</label>
 <input type="text" id="sender" name="user_name" placeholder="Required" required>
 </div>
 <div class="flex-form">
 <label for="senderEmail">Email Address:</label>
 <input type="email" id="senderEmail" name="user_email" placeholder="Required" required>
 </div>
 <div class="flex-form">
<label for="message" class="form-description">Message:</label>
<textarea id="message" name="user_message"></textarea>
</div>
<p><button>Send</button></p>
</form>
</div>
`;

      // making the overlay visible
      const overlayForm = document.querySelector('.overlay_form');
      const formElement = document.getElementById('form');
      formElement.addEventListener('click', () => { 
      overlayForm.classList.remove('hidden_form');
      modalForm.innerHTML = displayForm;
      });
    
       // Close the modal
       const formClose = document.querySelector('.form-close');
       formClose.addEventListener('click', () => {
         overlayForm.classList.add('hidden_form');
       });

    // ------------------------------------------->
      
    // FUNCTION TO DISPLAY PROJECTS
    function displayProjects() {
      const portfolio = document.querySelector(".portfolio_flex");
      let projectHTML = "";
      projects.forEach((project, i) => {
        projectHTML += `
        <div class="portfolio_images" data-index="${i}">
        <img src="images/${project.image}.jpg">
          <div class="portfolio_button">
            <button class="btn_info">Info</button>
          </div> 
          </div>
        `;
      });
      // making the projects visible
      portfolio.innerHTML = projectHTML;
    }
    displayProjects();

    // Display each project information
const projectBack = document.querySelector('.project-close');
const portfolio = document.querySelector('.portfolio');
const modal_project = document.querySelector('#modal_project')
const btnInfo = document.querySelector('.btn_info');

      // displays the info on click
      const portfolioImages = document.querySelector('.portfolio');
      portfolioImages.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.className === 'btn_info') {
          portfolio.style.display = 'none';
         modal_project.style.display = 'block';
         displayProject(e.target.parentNode.parentNode.dataset.index);
        }
          })

      
      // goes back on click
      projectBack.addEventListener('click', () => {
        modal_project.style.display = 'none';
        portfolio.style.display = 'block';
        })
     

              // making the projects visible
              function displayProject(index) {
                const project = `
                          
                          <div class="projectPhoto">
                              <img src="images/${projects[index].imageSmall}.png">
                          </div>
                         
                          <div class="info">
                              <ul>
                                  <li><code>const project = {</code></li>
                                  <li><code>'name': '${projects[index].title}',</code></li>
                                  <li><code>'description': '${projects[index].description}',</code></li>
                                  <li><code>'technologies': ${projects[index].technologies}</code></li>
                                  <li><code>'url': '<a class="link" href="${projects[index].url}"target="_blank">click me and go live<a>'</code></li>
                                  <li><code>};</code></li>
                              </ul>
                          </div>
                  </div>
                  `;
                // making the projects visible
                const projectFlex = document.querySelector(".projectFlex");
                projectFlex.innerHTML = project;
                return project;
              }
  