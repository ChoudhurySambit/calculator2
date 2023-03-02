let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }
      else if (e.target.innerHTML =="R")
      {
        console.log("Error");
        document.querySelector('input').value="error"
        let a=document.querySelector("input");
        a.addEventListener("click",(e1)=>{
          document.querySelector('input').value=""
        })
      }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})