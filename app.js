function send_message(){
    let error =document.getElementById("error");

    let phone = phoneInput.getNumber();
    if(/^[a-zA-Z]+$/.test(phone) || phone.length<10){
      // variable is alphabetic
      error.style.display="block";
    }else{
      // variable is not alphabetic
      window.open("https://wa.me/"+phone, "_blank");
    }
}
