const log = console.log
const regexp = /(\<)|(\>)/g
const result = '<div>Hello World</div>'.replace(regexp, (match, $1, $2) => {
    if ($1) return '&lt;'
    else if ($2) return '&gt;'
})
log(result) // &lt;div&gt;Hello World&lt;/div&gt;
