let Text=document.getElementById('text');
    Text.style.color='blue';
    Text.style.fontSize='50px';
    
let h1=document.getElementsByTagName('h1')[0];
    h1.style.color='blue';
    h1.style.fontSize='50px';

let box=document.getElementsByClassName('box')[0];
    box.style.color='blue';
    box.style.fontSize='50px';

let hello=document.getElementsByTagName('h1')[1];
    hello.style.color='blue';
    hello.style.fontSize='50px';
    hello.innerText='Hello World';

let b1=document.getElementsByTagName('button')[0];
    b1.addEventListener('click',() => {
        let Change=document.getElementsByClassName('cards')[0];
            Change.style.flexDirection='column';
    })

let hello1=document.getElementsByTagName('h1')[2];
    hello1.style.color='red';

let b2=document.getElementsByTagName('button')[1];
    b2.addEventListener('click',() => {
        let Welcome=document.getElementsByTagName('h1')[3];
            Welcome.style.color='blue';
            Welcome.innerText='Welcome to Elevation Acadamy';
})

function DisplayTime(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = document.getElementById('session');
    if(hrs >11){
        session.innerText = 'PM';
    }
    else {
        session.innerText = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(DisplayTime,1000);

let form =document.getElementById("form");
    form.addEventListener('submit', function(event){
        event.preventDefault();

    var name = document.getElementById("name").value;
        console.log("name");
    var mail = document.getElementById("mail").value;
        console.log("mail");
    var number = document.getElementById("number").value;
        console.log("number");
    var date = document.getElementById("date").value;
        console.log("date");
    console.log(name);
    })