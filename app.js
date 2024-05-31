const username = document.querySelector('#username'),
      password = document.querySelector('#password')

username.addEventListener('click', function(){
    username.style.width="250px";
    username.classList.add("dynamic")
});

password.addEventListener('click', function(){
    password.style.width="250px";
    password.classList.add("dynamic")
});

username.addEventListener('blur', function(){
    username.style.width="150px";
    username.classList.remove("dynamic")
});
password.addEventListener('blur', function(){
    password.style.width="150px";
    password.classList.remove("dynamic")
});