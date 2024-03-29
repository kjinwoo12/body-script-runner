class BodyScriptRunner {
    prefix = "{%"
    suffix = "%}"

    run(element, prefix, suffix) {
        if(prefix !== undefined) {
            this.prefix = prefix
        }
        if(suffix !== undefined) {
            this.suffix = suffix
        }
        if(this.prefix == this.suffix) {
            console.error("The prefix("+this.prefix+") and suffix("+this.suffix+") are the same. These two must be used as different characters.")
            return;
        }
        if(this.prefix.length == 0 || this.suffix.length == 0)
        {
            console.error("The prefix("+this.prefix+") and suffix("+this.suffix+") must be at least one character.")
            return;
        }
        const regexStr = this.prefix + "[^"+this.prefix+"|^"+this.suffix+"]*" + this.suffix
        const regex = new RegExp(regexStr, "g")
        const matchedTextArr = element.innerText.match(regex)
        for(const text of matchedTextArr) {
            element.innerText = element.innerText.replace(text, eval(text.replace(this.prefix,"").replace(this.suffix,"")))
        }
    }
}
try{//Safe-guard invalid error message : undefined 'module'
    module.exports = { bodyScriptRunner: new BodyScriptRunner() }
} catch (e) {
}
