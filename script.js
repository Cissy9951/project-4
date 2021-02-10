$(document).ready(function(){

let menu = [$("#contact"),$("#design"),$("#art"),$("#digital"),$("#about")];
let projects = $(".elem");
let clicked = [];


$(".tab").click(function(){

    // $(this).siblings().removeClass("elem");
    $(".welcome").removeClass("show");
    $(".welcome").addClass("elem");

    for (i=0; i<menu.length; i++){
        menu[i].css("height", "40%");
    };

    let x = $(this).attr("id");

    for (i=0; i<projects.length; i++){

        if (x == $(projects[i]).attr("id")){

            $(projects[i]).removeClass("elem");
            $(projects[i]).addClass("show");

        }

        if (x != $(projects[i]).attr("id")){

            $(projects[i]).addClass("elem");
            $(projects[i]).removeClass("show");

        }

    }

    if (clicked.length == 0){
        $(this).animate({height: "100%"});
        clicked.push(this);

    } else if (clicked.length != 0 && clicked[0] == this){
        $(this).css("height", "40%");
        clicked.pop();

        for (i=0; i<menu.length; i++){
            $(projects[i]).addClass("elem");
            $(projects[i]).removeClass("show");
        };
        
        $(".welcome").removeClass("elem");
        $(".welcome").addClass("show");

    } else if (clicked.length != 0 && clicked[0] != this){
        $(this).animate({height: "100%"});
        clicked.pop();
        clicked.push(this);
    }

    })

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

})


