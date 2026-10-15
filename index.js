const pictures=new Array(3);

pictures.push("https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg");

pictures.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10");

pictures.push("https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg");


function Button1(){
    let wausGoodShawty=document.getElementById("wausGoodShawty");
    console.log(wausGoodShawty.src);
    if(wausGoodShawty.src==[0]){
     wausGoodShawty.src=pictures[1];
    }
    if(wausGoodShawty.src==[1]) {
        wausGoodShawty.src=pictures[2];
    }
    else{
        wausGoodShawty.src=pictures[0];
    }
}

function Button2(){
    let wausGoodShawty=document.getElementById("wausGoodShawty");
    console.log(wausGoodShawty.src);
    if(wausGoodShawty.src==[2]){
        wausGoodShawty.src=pictures[1];
    }
    if(wausGoodShawty.src==[1]) {
        wausGoodShawty.src=pictures[0];
    }
    else{
        wausGoodShawty.src=pictures[2];
    }
}
