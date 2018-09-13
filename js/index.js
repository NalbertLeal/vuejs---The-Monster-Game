new Vue({
    el: "#app",
    data: {
        actions: [],
        gameRunning: false,
        yourLife: 100,
        monsterLife: 100,
        actionsBtns: ''
    },
    watch: {
        gameRunning: function() {
            if(!this.gameRunning) {
                this.yourLife = 100;
                this.monsterLife = 100;
            }
        }
    },
    computed: {
        actionsJustCnt: function() {
            if(this.gameRunning) {
                return {
                    justifyContent: "space-around"
                };
            }
            else {
                return {
                    justifyContent: "center"
                };
            }
        },
        yourLifeBar: function() {
            return {
                width: this.yourLife + "%"
            };
        },
        monsterLifeBar: function() {
            return {
                width: this.monsterLife + "%"
            };
        }
    },
    methods: {
        atkMonster: function() {
            // your atk
            let newMosterLife = this.monsterLife - ((Math.random() * 10) + 1);
            this.actions.push({msg: "The monster has suffered -" + parseInt(newMosterLife), class: "green"});
            if(parseInt(newMosterLife) > 0) {
                this.monsterLife = parseInt(newMosterLife);
            }
            else {
                this.monsterLife = 0;
                this.actions.push("You won!!!")
            }
            // monster atk
            let newYourLife = this.yourLife - ((Math.random() * 10) + 1);
            this.actions.push({msg: "The you has suffered -" + parseInt(newYourLife), class: "red"});
            if(parseInt(newYourLife) > 0) {
                this.yourLife = parseInt(newYourLife);
            }
            else {
                this.yourLife = 0;
                this.actions.push("The Monster won!!!")
            }

            if(this.monsterLife <= 0 || this.yourLife <= 0) {
                this.gameRunning = false;
            }
        },
        specialAtk: function() {
            let newMosterLife = this.monsterLife - ((Math.random() * 20) + 1);
            this.actions.push({msg: "SPECIAL ATK: The monster suffer -" + parseInt(newMosterLife), class: "green"});
            this.monsterLife = parseInt(newMosterLife);
            if(parseInt(newMosterLife) > 0) {
                this.monsterLife = parseInt(newMosterLife);
            }
            else {
                this.monsterLife = 0;
                this.actions.push("You won!!!")
            }
            // monster atk
            let newYourLife = this.yourLife - ((Math.random() * 10) + 1);
            this.actions.push({msg: "The you has suffered -" + parseInt(newYourLife), class: "red"});
            if(parseInt(newYourLife) > 0) {
                this.yourLife = parseInt(newYourLife);
            }
            else {
                this.yourLife = 0;
                this.actions.push("The Monster won!!!")
            }

            if(this.monsterLife <= 0 || this.yourLife <= 0) {
                this.gameRunning = false;
            }
        },
        heal: function() {
            let newYourLife = this.yourLife + ((Math.random() * 4) + 1);
            if(parseInt(newYourLife) <= 100) {
                this.yourLife = parseInt(newYourLife);
                this.actions.push({msg: "The you has heal +" + parseInt(newYourLife), class: "green"});
            }
            else {
                this.yourLife = 100;
                this.actions.push("You are already 100 life point");
            }
            // monster atk
            newYourLife = this.yourLife - ((Math.random() * 10) + 1);
            this.actions.push({msg: "The you has suffered -" + parseInt(newYourLife), class: "red"});
            if(parseInt(newYourLife) > 0) {
                this.yourLife = parseInt(newYourLife);
            }
            else {
                this.yourLife = 0;
                this.actions.push("The Monster won!!!")
            }

            if(this.monsterLife <= 0 || this.yourLife <= 0) {
                this.gameRunning = false;
            }
        }
    }
})