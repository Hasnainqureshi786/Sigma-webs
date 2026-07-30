  console.log("hello")
         let box1=document.getElementsByClassName("box")
         console.log(box1)
         box1[2].style.backgroundColor="red";
         document.getElementById("yello").style.backgroundColor="yellow"
                document.querySelector(".box").style.backgroundColor="green"
                document.querySelectorAll(".box").forEach(e => {
                    e.style.backgroundColor="gray"
                    
                });