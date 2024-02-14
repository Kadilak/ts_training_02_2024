export function executeMe() {

    function fnVar() {
        for (var i = 0; i < 3; i++) {
            setTimeout(() => console.log("VAR:" + i), 1000 * i)
        }
    }

    function fnLet() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => console.log("LET" + i), 1000 * i)
        }
    }

    fnVar();
    //fnLet();
}