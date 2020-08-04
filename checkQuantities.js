//stores the amount  of ram to download
function getRam(){
    var a = document.getElementById("ramAmount").value
    sessionStorage.GB = a
    console.log(sessionStorage.GB)
}
//Default amounts of ram available
var GB2 = 135
var GB4 = 89
var GB8 = 59
var GB16 = 29
var GB32 = 12
window.setInterval(function(){
  var t = Math.floor((Math.random() * 2) + 1);
        if (t==2) {
            var c = Math.floor((Math.random() * 5) + 1);

            if(c==1){
                var a = Math.floor((Math.random() * 2) + 1);
                if(a==1){
                    GB2+=1 
                    console.log("increasing GB2 by 1")
                }else if(a==2){
                    GB2-=1
                    console.log("decreasing GB2 by 1")
                }
                document.getElementById("avail2GB").innerHTML = GB2
            }else if(c==2){
                var a = Math.floor((Math.random() * 4) + 1);
                if(a==1){
                    GB4+=1 
                    console.log("increasing GB4 by 1")
                }else if(a==2){
                    GB4-=1
                    console.log("decreasing GB4 by 1")
                }
                document.getElementById("avail4GB").innerHTML = GB4                
            }else if(c==3){
                var a = Math.floor((Math.random() * 6) + 1);
                if(a==1){
                    GB8+=1 
                    console.log("increasing GB8 by 1")
                }else if(a==2){
                    GB8-=1
                    console.log("decreasing GB8 by 1")
                }
                document.getElementById("avail8GB").innerHTML = GB8                
            }else if(c==4){
                var a = Math.floor((Math.random() * 8) + 1);
                if(a==1){
                    GB16+=1 
                    console.log("increasing GB16 by 1")
                }else if(a==2){
                    GB16-=1
                    console.log("decreasing GB16 by 1")
                }
                document.getElementById("avail16GB").innerHTML = GB16                
            }else if(c==5){
                var a = Math.floor((Math.random() * 10) + 1);
                if(a==1){
                    GB32+=1 
                    console.log("increasing GB32 by 1")
                }else if(a==2){
                    GB32-=1
                    console.log("decreasing GB32 by 1")
                }
                document.getElementById("avail32GB").innerHTML = GB32                
            }
        }
}, 500);