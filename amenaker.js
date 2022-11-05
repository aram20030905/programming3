class amenaker {
    constructor(x, y) {
         this.x = x;
         this.y = y;
         this.energy = 8;
         
         this.directions = [];
     }
     getNewCoordinates() {
         this.directions = [
             [this.x - 1, this.y - 1],
             [this.x, this.y - 1],
             [this.x + 1, this.y - 1],
             [this.x - 1, this.y],
             [this.x + 1, this.y],
             [this.x - 1, this.y + 1],
             [this.x, this.y + 1],
             [this.x + 1, this.y + 1]
         ];
 
     }
     chooseCell(character) {
         this.getNewCoordinates()
         var found = [];
         for (var i in this.directions) {
             var x = this.directions[i][0];
             var y = this.directions[i][1];
             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
 
                 if (matrix[y][x] == character) {
                     found.push(this.directions[i]);
                 }
             }
         }
         return found;
     }
 
     mul () {
      
         var emptyCells = this.chooseCell(0);
         var newCell = random(emptyCells);
  
         if(newCell){
             var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = 3;
  
             var amenaker = new Amenaker(newX, newY);
             Amenaker.push(amenaker);
             this.energy = 8;
         }
     }
 
     move() {
         this.energy--
         var emptyCells = this.chooseCell(0);
         var newCell = random(emptyCells);
         if(newCell && this.energy >= 0) {
             var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = matrix[this.y][this.x]
             matrix[this.y][this.x] = 0;
             this.x = newX
             this.y = newY
         } else {
             this.die()
         }
     }
 
     eat() {
         var emptyCells = this.chooseCell(2);
         var newCell = random(emptyCells);
         if(newCell) {
             this.energy++
             var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = matrix[this.y][this.x]
             matrix[this.y][this.x] = 0;
             this.x = newX
             this.y = newY
             if(this.energy > 10) {
                 this.mul()
             }
             for (var i in amenaker) {
                 if (newX == amenaker[i].x && newY == amenaker[i].y) {
                    amenaker.splice(i, 1);
                     break;
                 }
             }
             
         } else {
             this.move()
         }
     }
 
     die() {
         matrix[this.y][this.x] = 0;
         for (var i in amenakerArr) {
             if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
               
                 amenakerArr.splice(i, 1);
                 break;
             }
         }
     }
 }        