// let active_tab_id = 0;

chrome.tabs.onActivated.addListener(function (tab) {
    console.log(tab)
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        if (/^https:\/\/www\.messenger.com/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, { file: './mystyle.css' });
            chrome.tabs.executeScript(null, { file: '/foreground/foreground.js' }, () => console.log('i injected'))
        }
    })
})

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     active_tab_id = tabId
//     console.log(changeInfo)
//     if(changeInfo.status === 'complete') {
//         chrome.tabs.executeScript(null ,{
//             file:'/foreground/foreground.js'
//         }, () => console.log('i injected'))
//     }
// }) 