chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    const requestHeaders = details.requestHeaders.map(header => {
        if (header.name == "User-Agent") {
            header.value = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"
        }
        return header
    })
    return {requestHeaders}
}, {
    urls: ["*://*.mbga.jp/*"]
}, ["blocking", "requestHeaders"])

chrome.browserAction.onClicked.addListener((tab) => {
    // chrome.tabs.create({
    //     url: 'opener.html',
    //     active: false
    // })
    // アドレスバーを表示したポップアップダイアログを開くのが面倒臭いと俺の中で話題に
    chrome.windows.getCurrent({}, (win) => {
        chrome.windows.create({
            url: "opener.html",
            width: 1,
            height: 1,
            focused: false,
        }, () => {
            chrome.windows.update(win.id, {
                focused: true
            })
        })
    })
})