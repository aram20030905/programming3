function generateMatrix(matLength, gr, grEa, grEaea, amen, bom, jur) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }

    for (let i = 0; i < grEaea; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }

    for (let i = 0; i < amen; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }

    for (let i = 0; i < bom; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }

    }
    for (let i = 0; i < jur; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;
}


matrix = generateMatrix(30, 10, 40, 20, 10, 10,10);


var side = 120;

let grassArr = [];
let grassEaterArr = [];
let grassEatereatArr = [];
let amenakerArr = [];
let bombArr = [];
let jurArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let grEateat = new GrassEatereat(x, y);
                grassEatereatArr.push(grEateat)

            }


            else if (matrix[y][x] == 4) {
                let amen = new Amenaker(x, y);
                amenakerArr.push(amen)

            }


            else if (matrix[y][x] == 5) {
                let bom = new Bomb(x, y);
                bombArr.push(bom)

            }
            else if (matrix[y[x] == 6]) {
                let jur = new Jur(x, y);
                jurArr.push(jur)
            }

        }
    }
}

function draw() {
    console.log(grassArr)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("grey");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            else if (matrix[y][x] == 6) {
                fill("black")
            }

            rect(x * side, y * side, side, side, side);


        }
    }

    for (let i in grassArr) {


        grassArr[i].mul()

    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }


    for (let i in grassEatereatArr) {
        grassEatereatArr[i].eat()

    }


    for (let i in amenakerArr) {
        amenakerArr[i].eat()

    }


    for (let i in bombArr) {
        bombArr[i].explode()

    }



}






