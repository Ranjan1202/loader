let square = document.createElement('div')
    square.id = 'square'

    document.body.appendChild(square)
    let box = document.createElement('div')
    box.id = 'box'
    square.appendChild(box)
    let fill = document.createElement('div')
    fill.id = 'fill'
    box.appendChild(fill)

    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`#square{width:100%;height:100vh; background:#242F3F;display:flex;align-items:center; justify-content:center; position:fixed;top:0;left:0;z-index:99999;}`)
    style.sheet.insertRule(`#box{display: inline-block;
 width: 50px;
 height: 50px;
 position: relative;
 border: 4px solid white;
 animation: box 2s infinite ease;}
    `)
    style.sheet.insertRule(`#fill{vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: white;
  animation: box-fill 2s infinite ease-in;}`)
    style.sheet.insertRule(`
 @keyframes box {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}
 `)
    style.sheet.insertRule(`
 
@keyframes box-fill {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}`)

 document.body.onload = ()=>{
  square.style.display = 'none'
}
