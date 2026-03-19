// Wait for the whole page to load before running our code
window.onload = function() {
    
    // 1. Find all our tab links and content panels
    var tabs = document.querySelectorAll('li[role="tab"] a');
    var panels = document.querySelectorAll('div[role="tabpanel"]');

    // 2. Loop through each tab one by one to attach a click listener
    for (var i = 0; i < tabs.length; i++) {
        
        // What happens when a specific tab is clicked:
        tabs[i].onclick = function(event) {
            
            // Stop the link from jumping the page downwards
            event.preventDefault();

            // A. Hide everything first (Reset state)
            // We use another loop to go through and remove the 'active' class from all of them
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
                panels[j].classList.remove('active');
            }

            // B. Highlight the clicked tab
            // 'this' refers to the exact tab link you just clicked
            this.classList.add('active');

            // C. Show the matching panel
            // Grab the href (like "#tabpanel1") from the clicked tab
            var targetId = this.getAttribute('href'); 
            // Find the panel with that exact ID and make it active
            var targetPanel = document.querySelector(targetId);
            targetPanel.classList.add('active');
        };
    }

    // 3. Open the first tab by default when the page loads
    if (tabs.length > 0) {
        tabs[0].click();
    }
};

/*
    SOURCES
querySelectorAll - https://www.w3schools.com/jsref/met_document_queryselectorall.asp
for loop - https://www.w3schools.com/js/js_loop_for.asp
classList - https://www.w3schools.com/jsref/prop_element_classlist.asp
*/