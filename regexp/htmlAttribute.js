const log = console.log
const htmlTag = `<a id="whale_promotion_download_file" style="display: none" href="http://update.whale.naver.net/downloads/installers/WhaleSetup.exe" download=""></a>`
const regexp = /(\S+)=["']?(.+?["'])/gi
const matchList = []
const getAttribute = tag => {
    return regexp.exec(tag)
}
while ((m = getAttribute(htmlTag))) {
    matchList.push(m)
}
matchList.forEach((item, index, arr) => {
    log(`name: ${arr[index][1]}, value: ${arr[index][2]}`)
    // name: id, value: whale_promotion_download_file"
    // name: style, value: display: none"
    // name: href, value: http://update.whale.naver.net/downloads/installers/WhaleSetup.exe"
    // name: download, value: ""
})
