const log = console.log
const url =
    'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container'

class LocationURL {
    constructor(url) {
        this.url = /(https:?)?(\/\/)?(.+(?=:))?(:[0-9]{4})?(.+(?=\?))?(\?.+(?=\#))?(\#.+)/gi.exec(
            url
        )
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
    pathname() {
        return this.url[5]
    }
    search() {
        return this.url[6]
    }
    hash() {
        return this.url[7]
    }
    origin() {
        return this.url[1] + this.url[2] + this.url[3] + this.url[4]
    }
}
const locationUrl = new LocationURL(url)
log(locationUrl.href()) // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
log(locationUrl.protocol()) //https:
log(locationUrl.host()) //developer.mozilla.org:8080
log(locationUrl.hostname()) //developer.mozilla.org
log(locationUrl.port()) //8080
log(locationUrl.pathname()) // /en-US/search
log(locationUrl.search()) //?q=URL
log(locationUrl.hash()) //#search-results-close-container
log(locationUrl.origin()) //https://developer.mozilla.org:8080
