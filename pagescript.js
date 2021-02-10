$(document).ready(function(){
    let design = $("#a");
    let art = $("#b");
    let digital = $("#c");
    let array1 = ["design", "art", "digital"];
    let array2 = [design, art, digital];
    let clicked = [];



    function change(){
        const large = window.matchMedia("(min-width: 700px)");
        const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)")
    
        if (large.matches) {

            $(".tab").click(function(){

                let x = $(this).attr("id");
           
                if (x == "close" || x == "home"){
                   $(".navigation").css("width", "5vw");
                   for (i=0;i<array2.length;i++){
                       array2[i].removeClass("show");
                       array2[i].addClass("elem");
                   }
               } else if (x != "close" || x != "home"){
                   for (i=0;i<array1.length;i++){
                       if (array1[i] == x){
                           array2[i].removeClass("elem");
                           array2[i].addClass("show");
                       }
           
                       if (array1[i] != x){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
           
                       }
                   }
           
           
                   if (clicked.length == 0){
                       $(".navigation").animate({width: "100vw"});
                       clicked.push(this);
               
                   } else if (clicked.length != 0 && clicked[0] == this){
                       $(".navigation").animate({width: "5vw"});
                       clicked.pop();
                       for (i=0;i<array1.length;i++){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
               
                       }
               
           
                   } else if (clicked.length != 0 && clicked[0] != this){
                       $(".navigation").animate({width: "100vw"});
                       
                       clicked.pop();
                       clicked.push(this);
                   }
           
               }
           
           
               })
           
          } else if (small.matches){
            $(".tab").click(function(){

                let x = $(this).attr("id");
           
                if (x == "close" || x == "home"){
                   $(".navigation").css("height", "3vh");
                   $(".tab").animate({height: "1vh"});
                   $(".tab").css("border-left", "2px, solid, salmon");
                   $(".tab").css("color", "salmon");


                   for (i=0;i<array2.length;i++){
                       array2[i].removeClass("show");
                       array2[i].addClass("elem");
                   }
               } else if (x != "close" || x != "home"){
                   for (i=0;i<array1.length;i++){
                       if (array1[i] == x){
                           array2[i].removeClass("elem");
                           array2[i].addClass("show");
                       }
           
                       if (array1[i] != x){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
           
                       }
                   }
           
                   if (clicked.length == 0){
                       $(".navigation").animate({height: "100vh"});
                       $(this).animate({height: "3vh"});
                       $(this).css("color", "peachpuff");


                       clicked.push(this);
               
                   } else if (clicked.length != 0 && clicked[0] == this){
                       $(".navigation").animate({height: "3vh"});
                       $(".tab").animate({height: "1vh"});
                       $(".tab").css("border-left", "2px, solid, salmon");
                       $(".tab").css("color", "salmon");
    

                       clicked.pop();
                       for (i=0;i<array1.length;i++){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
               
                       }
               
           
                   } else if (clicked.length != 0 && clicked[0] != this){
                       $(".navigation").animate({height: "100vh"});
                       $(".tab").animate({height: "3vh"});

                       clicked.pop();
                       clicked.push(this);
                   }
           
               }
           
           
               })

          }
    }
    
    $(".select").mouseover(function(){
        $(this).children("img").css("width", "250px");
        $(this).children("img").css("height", "250px");
        $(this).siblings().children("img").css("width", "50px");
        $(this).siblings().children("img").css("height", "50px");
    })
    $(".select").mouseleave(function(){
        $(this).children("img").css("width", "50px");
        $(this).children("img").css("height", "50px");
    })

    change();
    large.addListener(change);


    
   
    })
    
    