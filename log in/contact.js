// ===============      input    ====================

let sign_in_name = document.getElementById('sign_in_name');
let sign_in_password = document.getElementById('sign_in_password');
let sign_in_btn = document.querySelector('.sign_in_btn');
let sign_up_name = document.getElementById('sign_up_name');
let sign_up_username = document.getElementById('sign_up_username');
let sign_up_password = document.getElementById('sign_up_password');
let sign_up_btn = document.querySelector('.sign_up_btn');
let sign_up_notice = document.querySelector('#sign_up_notice')
let sign_in_notice = document.querySelector('#sign_in_notice')


// =========== sign up code   ===========
let sign_up_div = document.querySelector('.sign_up_div');
let sign_up_p = sign_up_div.getElementsByTagName('p');




sign_up_btn.onclick = function (e) {
  e.preventDefault()
  update_sign_up_data()
}

function update_sign_up_data() {
  if (sign_up_name.value != "" && sign_up_username.value != "" && sign_up_password.value != "") {
    if (localStorage.getItem(sign_up_username.value) == null) {
      let userdata;
      userdata = {
        name: sign_up_name.value,
        username: sign_up_username.value,
        password: sign_up_password.value
      }
      localStorage.setItem(sign_up_username.value, JSON.stringify(userdata));
      sign_up_notice.innerHTML = "sign up sucess";
      sign_up_notice.style.color = "green"
      setTimeout(function () {
        sign_up_notice.innerHTML = "";
      }, 3000)
      
      sign_up_name.value = ""
      sign_up_username.value = ""
      sign_up_password.value = ""

      sign_up_name.style.border ="1px solid #000000"
      sign_up_p[0].innerHTML =""

      sign_up_username.style.border="1px solid #000000"
      sign_up_p[1].innerHTML =""

      sign_up_password.style.border="1px solid #000000"
      sign_up_p[2].innerHTML =""

    } else {
      sign_up_notice.innerHTML = "username already exist";
      sign_up_notice.style.color = "blue"
      setTimeout(function () {
        sign_up_notice.innerHTML = "";
      }, 3000)
    }

  } else {
    if (sign_up_name.value == "" && sign_up_username.value == "" && sign_up_password.value == "") {
      sign_up_p[0].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`
      sign_up_p[1].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`
      sign_up_p[2].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`


      sign_up_notice.innerHTML = "please fill data";
      sign_up_notice.style.color = "red"
      setTimeout(function () {
        sign_up_notice.innerHTML = "";
      }, 3000)
    }


  }



}

// ===========================================          sign_up_focus_input   ===============
sign_up_name.onblur = function () {
  if (sign_up_name.value != "") {
    sign_up_p[0].innerHTML = `<i class="fa-solid fa-check fa-bounce" style="color: #216803;"></i>`;
    sign_up_name.style.border = "1px solid #216803"

  } else {
    sign_up_p[0].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
  }


}
sign_up_username.onblur = function () {
  if(sign_up_username.value!=""){
    sign_up_p[1].innerHTML = `<i class="fa-solid fa-check fa-bounce" style="color: #216803;"></i>`;
    sign_up_username.style.border = "1px solid #216803"
  }
  else{
    sign_up_p[1].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
  }


}
sign_up_password.onblur = function () {
  if(sign_up_password.value!=""){
    sign_up_p[2].innerHTML = `<i class="fa-solid fa-check fa-bounce" style="color: #216803;"></i>`;
    sign_up_password.style.border = "1px solid #216803"
  }else{
    sign_up_p[2].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
  }
  


}





// ===========     sign in ==================
let sign_in_div = document.querySelector('.sign_in_div')
let p = sign_in_div.getElementsByTagName('p');


sign_in_btn.onclick = function (e) {
  e.preventDefault()
  update_sign_in_data()
}
function update_sign_in_data() {




  if (sign_in_name.value != "" && sign_in_password.value != "") {

    if (localStorage.getItem(sign_in_name.value) != null) {
      let data = JSON.parse(localStorage.getItem(sign_in_name.value))
      let pass = data.password
      if (pass == sign_in_password.value) {
        window.location = "../music.html";
        sessionStorage.setItem("userdata",sign_in_name.value)

        sign_in_name.value = "";
        sign_in_password.value = "";
        
      } else {
        sign_in_notice.innerHTML = "password is incorrect";
        sign_in_notice.style.color = "red"
        setTimeout(function () {
          sign_in_notice.innerHTML = "";
        }, 3000)
      }
    } else {
      sign_in_notice.innerHTML = "username not found";
      sign_in_notice.style.color = "blue"
      setTimeout(function () {
        sign_in_notice.innerHTML = "";
      }, 3000)
    }
  } else {
    if (sign_in_name.value == "" && sign_in_password.value == "") {
      p[0].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
      p[1].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;


      sign_in_notice.innerHTML = "please fill data";
      sign_in_notice.style.color = "red"
      setTimeout(function () {
        sign_in_notice.innerHTML = "";
      }, 3000)

    } 


  }

}
// =============================== sign in  focus  input        ==========================

sign_in_name.onblur = function () {
  if(sign_in_name.value!=""){
    p[0].innerHTML = `<i class="fa-solid fa-check fa-bounce" style="color: #216803;"></i>`
    sign_in_name.style.border = "1px solid #216803"
  }else{
    p[0].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
  }
  
}
sign_in_password.onblur = function () {
  if(sign_in_password.value!=""){
    p[1].innerHTML = `<i class="fa-solid fa-check fa-bounce" style="color: #216803;"></i>`
    sign_in_password.style.border = "1px solid #216803"
  }else{
    p[1].innerHTML = `<i class="fa-solid fa-circle-exclamation fa-beat" style="color: #fd082c;"></i>`;
  }
 
}


// ==================================    shutter   ===============================

let shutter = document.querySelector('.shutter');
let shutter_2 = document.querySelector('.shutter_2');
let shutter_sign_in_btn = document.querySelector('.shutter_sign_in_btn');
let shutter_sign_up_btn = document.querySelector('.shutter_sign_up_btn');

shutter_sign_in_btn.onclick = function (e) {
  e.preventDefault()
  shutter.classList.add('height_zero')
  shutter_2.classList.remove('height_zero');
  shutter_2.classList.add('take_height');

}

shutter_sign_up_btn.onclick = function (e) {
  e.preventDefault();
  shutter.classList.remove('height_zero');
  shutter.classList.add('take_height')


  shutter_2.classList.add('height_zero');

}