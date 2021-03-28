const franc = require('franc')
const langs = require('langs')

let sampleText = process.argv[2];
let francCode = franc(sampleText);
let langResult = langs.where("3", francCode);

try {
    console.log(`Our best guess is: ${langResult.name}`)
} catch {
    console.log("Could not match a language. Please try again with a larger text sample.")
}