function send_message(){
    let tel = document.getElementById("phone").value;
    let btn =document.getElementById("send");
    let error =document.getElementById("error");

    if(/^[a-zA-Z]+$/.test(tel) || tel.length<8){
        // variable is alphabetic
        error.style.display="block";
      }else{
        // variable is not alphabetic
        window.open("https://wa.me/"+tel, "_blank");
      }
}
