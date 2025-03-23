// Count open tabs and display it
chrome.tabs.query({}, (tabs) => {
    document.getElementById('tab-count').textContent = `Open Tabs: ${tabs.length}`;
});

// Close all tabs when button is clicked
document.getElementById('close-all').addEventListener('click', () => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => chrome.tabs.remove(tab.id));
    });
});
