
const screenSize = screen.width;
const videoAni = document.getElementById("videoani")
// alert(screenSize)

// if(screenSize <= 600 ){
//     videoAni.src = "Phone.mp4" ;
// }
//else if( screenSize <= 10 ){
//     videoAni.src = "Pc.mp4";
// }
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    videoAni.src = "phone.mp4";
} else {
    videoAni.src = "pc.mp4";
}

function clickz(){
    alert("you are  anime fans")
}

