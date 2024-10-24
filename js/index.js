let username = document.getElementById('username');
let password = document.getElementById('password');
let usernameLabel = document.querySelector(".username label");
let passwordLabel = document.querySelector(".password label");
let toastSuccess = document.querySelector('.toast_message_success')
let toastFail = document.querySelector('.toast_message_fail')
const loader = document.querySelector('.spinner_load')
const checkPass = document.getElementById('switch');


checkPass.addEventListener('click', () => {
    password.type === 'password' ? password.type = 'text' : password.type = 'password'
})


function checkUserValue() {
    if(username.value.length > 0){
        usernameLabel.classList.add("active")
    }else{
        usernameLabel.classList.remove("active")
    }
}

function checkPasswordValue() {

    if(password.value.length > 0){
        passwordLabel.classList.add("active")
    }else{
        passwordLabel.classList.remove("active")
    }
}

const login = document.getElementById('login')

login.addEventListener('click', function(evt) {
    evt.preventDefault()

    loader.classList.add('loader')
    login.textContent = ''

    if (username.value === 'Gorden' && password.value === '12345') {
        setTimeout(function () {
            loader.classList.add('loader');
    
            setTimeout(function () {
                loader.classList.remove('loader');
    
                toastSuccess.classList.add('toast_message_active');
                login.textContent = 'LOGIN'; 

                setTimeout(function () {
                    toastSuccess.classList.remove('toast_message_active');

                    document.location.href = 'home.html'
                }, 2000);
            }, 3000);
        }, 0); 
    }
    else{

        setTimeout(function () {
            loader.classList.remove('loader')
            toastFail.classList.add('toast_message_active');
            login.textContent = 'LOGIN'

            setTimeout(function () {
                toastFail.classList.remove('toast_message_active');
            }, 2000)
        }, 3000);

        
        
    }
    
})