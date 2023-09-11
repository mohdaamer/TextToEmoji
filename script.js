var clutter = "";

function encryption(){
    document.querySelector("#btn").addEventListener('click',()=>{

        // Getting a Input Encryption part
        var input = document.getElementById("encryinput").value
        var password = document.querySelector(".password").value
        console.log(input,password);

        const str = input.split("");
        str.forEach(element => {
        clutter += `&#128${element.charCodeAt()}`
        });
        document.querySelector("#result").innerHTML = clutter;
    })
}
encryption();

function btnclick(){

        //Decryption
        document.querySelector(".dec").addEventListener('click',()=>{
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#encryption").style.display = "none";
        document.querySelector(".dec").style.backgroundColor = "#333"
        document.querySelector(".enc").style.backgroundColor = "#1C1C1C"
        document.querySelector("#heading i").style.rotate = "180deg";
        document.querySelector("#result").style.display = "none";
    })
        //Encryption
        document.querySelector(".enc").addEventListener('click',()=>{
        document.querySelector("#encryption").style.display = "block";
        document.querySelector("#decryption").style.display = "none";
        document.querySelector(".enc").style.backgroundColor = "#333"
        document.querySelector(".dec").style.backgroundColor = "#1C1C1C"
        document.querySelector("#heading i").style.rotate = "0deg";
        document.querySelector("#result").style.display = "none";
    })
    document.querySelector(".enbtn").addEventListener('click',()=>{
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector(".debtn").addEventListener('click',()=>{
        document.querySelector("#result").style.display = "block"
    })
}
btnclick();