// Select the menu button and expanded menu elements
const menuButton = document.getElementById('menu-button'); // The hamburger menu button
const expandedMenu = document.getElementById('expanded-menu'); // The expandable menu

// Add a click event listener to the menu button
menuButton.addEventListener('click', function () {
  // Toggle the 'active' class on the expanded menu
  expandedMenu.classList.toggle('active');

  // Optional: Rotate the menu button icon for visual feedback
  menuButton.classList.toggle('rotate'); // Adds/removes a rotation effect to the button
});



// Select all quote blocks
const quoteBlocks = document.querySelectorAll('.quote-block');

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'animate' class when the block comes into view
        entry.target.classList.add('animate');
      } else {
        // Remove the 'animate' class when the block leaves the viewport
        entry.target.classList.remove('animate');
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the block is visible
  }
);

// Observe each quote block
quoteBlocks.forEach((block) => {
  observer.observe(block);
});
