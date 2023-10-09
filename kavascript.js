let input = document.getElementById(`inputbox`);
let buttons = document.querySelectorAll('button');
let String=``;

buttons.forEach(button => {
    button.addEventListener(`click`,(e) => {

        if(check===1 && e.target.innerHTML != `=`)
        {
            String=``;
            check=0;
        }
        if(e.target.innerHTML == `=`){
            String=eval(String);
            ++check;
            ///eval means evaluate
            input.value=String;
        }
        else if(e.target.innerHTML == `AC`){
            String=``;
            input.value=String;
        }
        else if(e.target.innerHTML == `DEL`)
        {
            String=String.substring(0,String.length-1);
            input.value=String;
        }
        else{
            String +=e.target.innerHTML;
            input.value=String;
        }
    })
})
