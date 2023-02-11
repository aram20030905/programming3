class Jur extends LivingCreature {


    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var amenaker = new Amenaker(newX, newY);
            amenakerArr.push(amenaker);
            this.energy = 8;
        }
    }

}