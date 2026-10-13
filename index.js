const pictures=new Array(3);

pictures.push("https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg");

pictures.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10");

pictures.push("https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg");


function Button1(){
    let wausGoodShawty=document.getElementById("wausGoodShawty");
    wausGoodShawty =JSON.parse(wausGoodShawty);
    pictures.push(wausGoodShawty);
    wausGoodShawty = pictures.shift();
    document.getElementById("wausGoodShawty").innerHTML = wausGoodShawty.src;
}

function Button2(){

}
