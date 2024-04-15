//popUP js
const openLayerpopup = () => {
    document.querySelector('#popup-layer').style.display = "block";
    document.getElementById("loginForm").addEventListener("submit", onSubmit);
}
const closeLayerpopup = () => {
    document.querySelector('#popup-layer').style.display = "none";
    document.getElementById("loginForm").removeEventListener("submit", onSubmit);
}

//로그인창

const onSubmit = (event) => {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("pw").value;

    if (username === "" || password === "" || (username && password === "")) {
        alert("아이디 또는 비밀번호를 입력해주세요.");
    } else {
        console.log("Username:", username);
        console.log("Password:", pw);
        alert("Login successful!");
    }
};


//landing

var mouseMoved;

document.onmousemove = function(){
    mouseMoved = new Date();
    toggleVisibility('orbit', 'landingPage');
}

setInterval(() => {
    var now = new Date();
    if (mouseMoved) {  // mouseMoveed 가 정의된 경우에만 아래 코드 실행
        var timeDiff = (now.getTime() - mouseMoved.getTime()) / 1000;
        if (timeDiff > 120){
            toggleVisibility('landingPage', 'orbit');
        }
    }
}, 1000);

function toggleVisibility(showId, hideId){
    document.getElementById(showId).style.opacity = '1';
    document.getElementById(showId).style.display = 'block';
    document.getElementById(hideId).style.opacity = '0';

    // 'transitionend' 이벤트를 사용하여 트랜지션이 끝난 후에 display 속성을 변경합니다.
    document.getElementById(hideId).addEventListener('transitionend', function() {
        if(document.getElementById(hideId).style.opacity == '0') {
            document.getElementById(hideId).style.display = 'none';
        }
    });
}