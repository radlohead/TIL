const log = console.log
const url =
    'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container'

class LocationURL {
    constructor(url) {
        this.url = /(https:?)?(\/\/)?(.+(?=:))?(:[0-9]{4})/gi.exec(url)
    }
    href() {
        return this.url.input
    }
    protocol() {
        return this.url[1]
    }
    host() {
        return this.url[3] + this.url[4]
    }
    hostname() {
        return this.url[3]
    }
    port() {
        return this.url[4].replace(/:/g, '')
    }
}
const locationUrl = new LocationURL(url)
log(locationUrl.href()) // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
log(locationUrl.protocol()) //https:
log(locationUrl.host()) //developer.mozilla.org:8080
log(locationUrl.hostname()) //developer.mozilla.org
log(locationUrl.port()) //8080

// console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
// console.log(url.protocol);  // https:
// console.log(url.host);      // developer.mozilla.org:8080
// console.log(url.hostname);  // developer.mozilla.org
// console.log(url.port);      // 8080
// console.log(url.pathname);  // /en-US/search
// console.log(url.search);    // ?q=URL
// console.log(url.hash);      // #search-results-close-container
// console.log(url.origin);    // https://developer.mozilla.org:8080
