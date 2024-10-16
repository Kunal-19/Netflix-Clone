const tabs = document.querySelectorAll(".tab-item");
const contentMap = [];

// Populate contentMap with tab and corresponding content
for (let i = 0; i < tabs.length; i++) {
    contentMap.push({
        tab: tabs[i],
        content: document.querySelector(`#tab${i + 1}-item-content`)
    });
}

let prevShowTab = tabs[0]; // Initialize previous tab as the first tab
prevShowTab.style.borderBottom = `0.2rem solid #e50815`;

// Add event listeners to each tab
contentMap.forEach(({ tab, content }) => {
    tab.addEventListener("click", () => {
        const prevContent = contentMap.find(item => item.tab === prevShowTab).content;
        const currentContent = content;

        // Remove "show" class from previously shown content
        prevContent.classList.remove("show");
        prevContent.style.display = "none";
        prevShowTab.style.borderBottom = `none`;
        prevShowTab.style.color = `#9a9a9a`;
        
        // Add "show" class to the newly clicked tab's content
        currentContent.classList.add("show");
        currentContent.style.display = "flex";
        currentContent.style.color = "white";
        tab.style.borderBottom = `0.2rem solid #e50815`;
        

        // Update the previously shown tab to the current one
        prevShowTab = tab;
    });
});