new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,

    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            var max = 10;
            var min = 3;
            var demage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= demage;
            if(this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return; // end the function
            }

            max = 12;
            min = 5;
            demage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= demage;
            if(this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
            }
        }
    }
});