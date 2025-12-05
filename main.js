// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    // Check if the element is currently intersecting (visible)
    if (entry.isIntersecting) {
      // Add the 'is-visible' class to trigger the CSS transition
      entry.target.classList.add('is-visible');
      // Stop observing once the element has faded in (optional, but good for performance)
      observer.unobserve(entry.target);
    }
  });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // viewport as the root
  rootMargin: '0px', // no margin
  threshold: 0.1, // trigger when 10% of the element is visible
});

// Find all elements with the 'fade-in-section' class
const fadeSections = document.querySelectorAll('.fade-in-section');

// Start observing each section
fadeSections.forEach(section => {
  observer.observe(section);
});