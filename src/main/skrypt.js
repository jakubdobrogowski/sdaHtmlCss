function changeValue() {

    divTestId = document.getElementById("testId");
    divTestId.style = "background-color: red";

}


function test() {


    const a = 30;
    if (true) {
        const a = 50;
    }
}


function validate() {

    var age = document.getElementsByName("age")[0];
    if (age.value < 18) {
        age.style = "background-color: red";
        return false
    }
    return true;
}