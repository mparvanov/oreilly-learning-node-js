// try {
//     throw new Error("Danger Zone!!!");
// } catch (e) {
//     console.log("I acaught the error PHEW");
// }



setTimeout(function(){
    try {
        throw new Error("Danger Zone!!!");
    } catch (e) {
        console.log("I acaught the error PHEW");
    }
}, 2000);