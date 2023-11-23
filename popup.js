// Get the color picker input element
const colorPicker = document.getElementById('colorPicker');

// Add event listener for changes in color selection
colorPicker.addEventListener('change', function(event) {
  const selectedColor = event.target.value;
  // Perform actions with the selected color (e.g., change page color)
  changePageColor(selectedColor);
});

// Function to change the color of the current webpage
function changePageColor(color) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
}
