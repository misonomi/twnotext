function listen() {
    document.getElementsByTagName('input').namedItem('switch').addEventListener("input", function(e) {
        browser.storage.sync.set({ enabled: e.target.checked });
    })
}

browser.storage.sync.get('enabled')
.then(res => {
    document.getElementsByTagName('input').namedItem('switch').checked = res.enabled;
})
listen()