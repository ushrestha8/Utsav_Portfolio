const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); // This selects the wrapper div
const sectBtn = document.querySelectorAll('.control'); // This selects the individual buttons
const allSections = document.querySelector('.main-content'); // Main body container for sections

function pageTransitions() {
    
    // --- 1. Handle Button Click and Section Activation ---
    
    // We attach the main click listener to the parent 'allSections'
    // to benefit from event bubbling, making the code cleaner.
    allSections.addEventListener('click', (e) => {
        // Check if the clicked element (or its parent) is a navigation control button
        const id = e.target.dataset.id;
        
        // If an element with a data-id attribute was clicked (i.e., a .control)
        if (id) {
            
            // A. Remove 'active-btn' from ALL controls
            sectBtn.forEach((btn) => {
                btn.classList.remove('active-btn');
            });

            // B. Add 'active-btn' to the specific button that was clicked
            // Use e.target.classList.add('active-btn'); if e.target is the button.
            // Since sometimes the icon is clicked, we target the parent control div:
            e.target.closest('.control').classList.add('active-btn');
            

            // C. Hide ALL sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // D. Show the target section
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
                
                // Optional: Scroll to the top of the new section for smooth transition (using CSS smooth scroll is better)
                // window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }
        }
    });
    
    
    // --- 2. Handle Theme Toggle ---
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });

}

pageTransitions();
