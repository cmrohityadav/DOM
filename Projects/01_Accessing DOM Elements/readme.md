
# DOM manipulation

- get the element

- event listening

## Accessing DOM Elements
```js
let hold=document.getElementById("changeTextButton")

console.log(hold)

```

### Current context of calling this function
```js
document.getElementById("changeTextButton").addEventListener('click',function(){
    console.log(this)
})



```

### Return window object
```js
document.getElementById("changeTextButton").addEventListener('click',()=>{
    console.log(this)
})

```

### Holding 

```js

document.getElementById("changeTextButton").addEventListener('click',function(){
    let hold=document.getElementById("myParagraph");

    console.log(hold)

})
```

