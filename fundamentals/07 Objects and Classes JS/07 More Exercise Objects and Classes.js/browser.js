function browser(obj, arr) {
    let openTabs = Object.values(obj['Open Tabs']);
    let recentlyClose = Object.values(obj['Recently Closed']);
    let browserLogs = Object.values(obj['Browser Logs']);

    arr.forEach(element => {
        let commandArray = element.split(' ');
        let action = commandArray[0];
        let site = '';
        if (commandArray.length === 2) {
            site = commandArray[1];
        } else {
            site = commandArray[1] + ' ' + commandArray[2];
        }
        if (action === 'Open') {
            openTabs.push(site);
            browserLogs.push(`${action} ${site}`)
        } else if (action === 'Close') {
            if (openTabs.includes(site)) {
                let index = openTabs.indexOf(site);
                openTabs.splice(index, 1);
                recentlyClose.push(site);
                browserLogs.push(`${action} ${site}`);
            }
        } else {
            openTabs = [];
            recentlyClose = [];
            browserLogs = [];
        }
    })

    console.log(`${obj['Browser Name']}`);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClose.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}
browser({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);