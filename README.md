# body-script-runner
It is for using javascript code in innerText. It makes possible to run javascript code on the HTML like below.
```html
<!--*.html-->
<div>
<div>- version info -</div>
    chrome : {%process.versions.chrome%}, node : {%process.versions.node%}, electron : {%process.versions.electron%}
</div>
```
```html
<!--result-->
<div>
<div>- version info -</div>
        chrome : 122.0.6261.139, node : 20.9.0, electron : 29.1.6
</div>
```

It looks like template language of Django. You can use and customize prefix `{%` and suffix `%}` of script like below.
```javascript
//preLoad.js
bodyScriptRunner.run(document.getElementsByTagName("body")[0], "%%"/**/, "##"/**/)
```
