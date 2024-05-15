let pass = document.getElementById("pass")
let msg = document.getElementById("msg")
let str = document.getElementById("str")

pass.addEventListener("input",function () {
   if ( pass.value.length == 0 ) {
      msg.style.display = "none"
   }else {
      msg.style.display = "block"
   }
   if ( pass.value.length < 4 ) {
      str.innerHTML = "weak"
      msg.style.color = '#ff5925'
      pass.style.borderColor = '#ff5925'
   }else if ( pass.value.length < 8 ) {
      str.innerHTML = "medium"
      msg.style.color = 'yellow'
      pass.style.borderColor = 'yellow'
   }else {
      str.innerHTML = "strong"
      msg.style.color = '#26d730'
      pass.style.borderColor = '#26d730'
   }
})

