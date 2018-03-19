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