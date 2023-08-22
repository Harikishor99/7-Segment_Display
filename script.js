
function Display() {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const loop = async () => {
        for (let index = 0; index < 10; index++) {
            var input = index;
            reset();
            // var input = document.getElementById('inputdata').value;
            if (input == 2 || input == 3 || input == 5 || input == 6 || input == 7 || input == 8 || input == 9 || input == 0) {
                document.getElementsByClassName('Adiv1')[0].setAttribute("style", "border-right: 15px solid red;");
                document.getElementsByClassName('Adiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Adiv3')[0].setAttribute("style", "border-left: 15px solid red;");
            }
            if (input == 1 || input == 2 || input == 3 || input == 4 || input == 7 || input == 9 || input == 8 || input == 0) {
                document.getElementsByClassName('Bdiv1')[0].setAttribute("style", "border-bottom: 15px solid red;");
                document.getElementsByClassName('Bdiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Bdiv3')[0].setAttribute("style", "border-top: 15px solid red;");
            }
            if (input == 1 || input == 3 || input == 4 || input == 5 || input == 9 || input == 6 || input == 7 || input == 8 || input == 0) {
                document.getElementsByClassName('Cdiv1')[0].setAttribute("style", "border-bottom: 15px solid red;");
                document.getElementsByClassName('Cdiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Cdiv3')[0].setAttribute("style", "border-top: 15px solid red;");
            }
            if (input == 2 || input == 3 || input == 5 || input == 6 || input == 8 || input == 0 || input == 9) {
                document.getElementsByClassName('Ddiv1')[0].setAttribute("style", "border-right: 15px solid red;");
                document.getElementsByClassName('Ddiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Ddiv3')[0].setAttribute("style", "border-left: 15px solid red;");
            }
            if (input == 2 || input == 6 || input == 8 || input == 0) {
                document.getElementsByClassName('Ediv1')[0].setAttribute("style", "border-bottom: 15px solid red;");
                document.getElementsByClassName('Ediv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Ediv3')[0].setAttribute("style", "border-top: 15px solid red;");
            }
            if (input == 4 || input == 5 || input == 6 || input == 8 || input == 0 || input == 9) {
                document.getElementsByClassName('Fdiv1')[0].setAttribute("style", "border-bottom: 15px solid red;");
                document.getElementsByClassName('Fdiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Fdiv3')[0].setAttribute("style", "border-top: 15px solid red;");
            }
            if (input == 2 || input == 3 || input == 4 || input == 5 || input == 6 || input == 8 || input == 9) {
                document.getElementsByClassName('Gdiv1')[0].setAttribute("style", "border-right: 15px solid red;");
                document.getElementsByClassName('Gdiv2')[0].setAttribute("style", "background-color: red;");
                document.getElementsByClassName('Gdiv3')[0].setAttribute("style", "border-left: 15px solid red;");
            }
            if (index == 9) index = -1;
            await wait(1000);
        }
    }
    loop();


}
function reset() {
    document.getElementsByClassName('Adiv1')[0].setAttribute("style", "border-right: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Adiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Adiv3')[0].setAttribute("style", "border-left: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Bdiv1')[0].setAttribute("style", "border-bottom: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Bdiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Bdiv3')[0].setAttribute("style", "border-top: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Cdiv1')[0].setAttribute("style", "border-bottom: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Cdiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Cdiv3')[0].setAttribute("style", "border-top: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Ddiv1')[0].setAttribute("style", "border-right: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Ddiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Ddiv3')[0].setAttribute("style", "border-left: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Ediv1')[0].setAttribute("style", "border-bottom: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Ediv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Ediv3')[0].setAttribute("style", "border-top: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Fdiv1')[0].setAttribute("style", "border-bottom: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Fdiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Fdiv3')[0].setAttribute("style", "border-top: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Gdiv1')[0].setAttribute("style", "border-right: 15px solid rgb(117, 121, 117);");
    document.getElementsByClassName('Gdiv2')[0].setAttribute("style", "background-color: rgb(117, 121, 117);");
    document.getElementsByClassName('Gdiv3')[0].setAttribute("style", "border-left: 15px solid rgb(117, 121, 117);");

}