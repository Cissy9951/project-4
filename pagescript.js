$(document).ready(function(){
    let design = $("#a");
    let art = $("#b");
    let digital = $("#c");
    let array1 = ["design", "art", "digital"];
    let array2 = [design, art, digital];
    let clicked = [];
    // let empty = [];


    function change(){
        const large = window.matchMedia("(min-width: 700px)");
        const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)")

    
        if (large.matches) {

            $(".button").click(function(event){
                let x = $(this).attr("class");

                if (x == "button"){
                    $(".navigation").css("width", "5vw");
                    $(".tab").animate({width: "3.5vw"});
                    clicked.pop();

                    for (i=0;i<array2.length;i++){
                        array2[i].removeClass("show");
                        array2[i].addClass("elem");
                    }
                }
            })

            $(".tab").click(function(event){

                let x = $(this).attr("id");

                if (x == "home"){
                   $(".navigation").css("width", "5vw");
                   $(".tab").animate({width: "3.5vw"});
                   for (i=0;i<array2.length;i++){
                       array2[i].removeClass("show");
                       array2[i].addClass("elem");
                   }
               } else if (x != "home"){
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
                       $(this).animate({width: "5vw"});
                       $(this).siblings().css("width", "3.5vw");


                       clicked.push(this);
               
                   } else if (clicked.length != 0 && clicked[0] == this){
                       $(".navigation").animate({width: "5vw"});
                       $(".tab").animate({width: "3.5vw"});
                       clicked.pop();
                       for (i=0;i<array1.length;i++){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
               
                       }
               
           
                   } else if (clicked.length != 0 && clicked[0] != this){
                       $(".navigation").animate({width: "100vw"});
                       $(this).animate({width: "5vw"});
                       $(this).siblings().css("width", "3.5vw");

                       clicked.pop();
                       clicked.push(this);
                   }
           
               }
           
               
           
               })
           
          } else if (small.matches){


            $(".button").click(function(event){
                let x = $(this).attr("class");

                if (x == "button"){
                    $(".navigation").animate({height: "5vh"});
                    $(".tab").animate({height: "3vh"});
                    $(".tab").css("border-left", "2px, solid, salmon");
                    clicked.pop();

                    for (i=0;i<array2.length;i++){
                        array2[i].removeClass("show");
                        array2[i].addClass("elem");
                    }
                }
            })



            $(".tab").click(function(){

                let x = $(this).attr("id");
           
                if (x == "home"){
                   $(".navigation").css("height", "5vh");
                   $(".tab").animate({height: "3vh"});


                   for (i=0;i<array2.length;i++){
                       array2[i].removeClass("show");
                       array2[i].addClass("elem");
                   }
               } else if (x != "home"){
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
                       $(this).animate({height: "100%"});
                       $(this).siblings().animate({height: "3vh"});

                       clicked.push(this);
               
                   } else if (clicked.length != 0 && clicked[0] == this){
                       $(".navigation").animate({height: "5vh"});
                       $(".tab").animate({height: "3vh"});
                       $(".tab").css("border-left", "2px, solid, salmon");
    

                       clicked.pop();
                       for (i=0;i<array1.length;i++){
                           array2[i].removeClass("show");
                           array2[i].addClass("elem");
               
                       }
               
           
                   } else if (clicked.length != 0 && clicked[0] != this){
                       $(".navigation").animate({height: "100vh"});
                       $(this).animate({height: "100%"});
                       $(this).siblings().css("height", "3vh");


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
        $(this).siblings().children("img").css("width", "200px");
        $(this).siblings().children("img").css("height", "200px");
    })
    $(".select").mouseleave(function(){
        $(this).children("img").css("width", "200px");
        $(this).children("img").css("height", "200px");
    })

    change();
    large.addListener(change);


    
   
    })
    
    