
function ten(callback){
    setTimeout(() => {
        console.log(10);
        callback();
    },3000);
}

function nine(callback){
    setTimeout(() => { 
        console.log(9);
        callback();
    },3000);
}

function eight(callback){
    setTimeout(() => {
        console.log(8);
        callback();
    },3000);
}

function seven(callback){
    setTimeout(() => {
        console.log(7);
        callback();
    },3000);
}

function six(callback){
    setTimeout(() => {
        console.log(6);
        callback();
    },3000);
}

function five(callback){
    setTimeout(() => {
        console.log(5);
        callback();
    },3000);
}

function four(callback){
    setTimeout(() => {
        console.log(4);
        callback();
    },3000);
}

function three(callback){
    setTimeout(() => {
        console.log(3);
        callback();
    },3000);
}

function two(callback){
    setTimeout(() => {
        console.log(2);
        callback();
    },3000);
}

function one(callback){
    setTimeout(() => {
        console.log(1);
        callback();
    },3000);
}

ten(() => {
    nine(() => {
        eight(() => {
            seven(() => {
                six(() => {
                    five(() => {
                        four(() => {
                            three(() => {
                                two(() => {
                                    one(() => {
                                        console.log("Happy Independence Day!!!");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});