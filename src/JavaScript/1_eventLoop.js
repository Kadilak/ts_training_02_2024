export function executeMe() {

    console.log("1");

    setTimeout(() => {
        console.log("2");
    });

    console.log("3");

    setTimeout(() => {
        console.log("4");
    }, 0);

    console.log("5");
}