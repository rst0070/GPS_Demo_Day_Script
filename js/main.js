$(async ()=>{

    let toggleOption = {
        duration: 500
    };

    $(".script_presenter").css(
        {
            background: "black",
            color: "white"
        }
    )

    $(".bar").click((event)=>{
        let presenter = $(event.currentTarget).find(".script_presenter");
        console.log(presenter.css("color"));
        if(presenter.css("color") == "rgb(255, 255, 255)"){
            presenter.css({
                "background" : "white",
                "color" : "black"
            });
        }else{
            presenter.css({
                "background" : "black",
                "color" : "white"
            });
        }
        $(event.currentTarget).siblings(".script_kr").toggle(toggleOption);
    })
});