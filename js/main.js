$(async ()=>{
    function lnToP(str){
        str = str.replace('\n', "</p/><br/><p>");
        return "<p>"+str+"</p>";
    }

    function getContentElement(title, presenter, scriptKr, scriptEng){
        scriptKr = lnToP(scriptKr);
        scriptEng = lnToP(scriptEng);

        return ""+
        "<div class=\"content\">"+
            "<div class=\"bar\">"+
                "<p class=\"script_title\">"+title+"</p>"+
                "<p class=\"script_presenter\">"+presenter+"</p>"+
            "</div>"+
            "<div class=\"script_kr\">"+scriptKr+"</div>"+
            "<div class=\"script_eng\">"+scriptEng+"</div>"+
        "</div>";
    }

    async function getScriptData(){
        return await $.ajax("/gps-demo-day-script/data/script_data.json");
    }

    function insertContents(scriptData){
        let container = $("#contents");

        for(let data of scriptData){
            let elementStr = getContentElement(data.title, data.presenter, data.script_kr, data.script_eng);
            container.append(elementStr);
        }
    }

    let toggleOption = {
        duration: 500
    };

    let data = (await getScriptData()).data;
    insertContents(data);

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