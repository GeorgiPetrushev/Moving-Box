//starting position on div element
let position = {
    top: 125,
    left: 125
};

let start = () => {
    //create new form
    document.querySelector(".btn").remove();

    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

        div.className = "boxOut";
        div1.className = "boxIn";
        div2.className = "btn-class";

    div.appendChild(div1);
    document.body.appendChild(div);

    for(let i=0; i<4; i++){
        let btn = document.createElement("button");
        btn.className = "btn";

        switch (i) {
            case 0:
                btn.innerHTML = "Top";
                break;

            case 1:
                btn.innerHTML = "Right";
                break;
            case 2:
                    btn.innerHTML = "Bottom";
                    break;
            case 3:
                    btn.innerHTML = "Left";
                    break;

        }

        div2.appendChild(btn);
    }

    document.body.appendChild(div2);

    //Move Div inside
    let  btnMove = document.querySelectorAll(".btn");
    let divIn = document.querySelector(".boxIn").style;

    let valueButton = ""
    for(let i=0; i < btnMove.length; i++){
        btnMove[i].addEventListener("click", () => {
            valueButton = btnMove[i].textContent.toLowerCase();
            if(valueButton === "bottom" || valueButton === "right"){
                switch (valueButton){
                    case "bottom":
                        valueButton = "top";
                        break;
                    case "right":
                        valueButton = "left";
                        break;
                }
                if(position[valueButton]>5){
                    position[valueButton] -= 5;
                    divIn[valueButton] = `${position[valueButton]}px`;
                    console.log(position);
                }
            }else{
                if(position[valueButton]<255){
                    position[valueButton] += 5;
                    divIn[valueButton] = `${position[valueButton]}px`;
                    console.log(position);
                }
            }
        });
    }
}


document.querySelector(".start").addEventListener("click", start);

window.addEventListener("keydown", (e) => {
    console.log(e.code)
    if(e.code.slice(0,5) === "Arrow"){
        let valueKey = "";
        let divIn = document.querySelector(".boxIn").style;
        if(e.code === "ArrowUp" || e.code === "ArrowDown"){
            valueKey = "top";
        } else {
            valueKey = "left";
        }

        if(e.code === "ArrowLeft" || e.code === "ArrowUp"){
            if(position[valueKey]>5){
                position[valueKey] -= 5;
                divIn[valueKey] = `${position[valueKey]}px`;
                console.log(position);
            }
        } else {
            if(position[valueKey]<255){
                position[valueKey] += 5;
                divIn[valueKey] = `${position[valueKey]}px`;
                console.log(position);
            }
        }
    }
});
