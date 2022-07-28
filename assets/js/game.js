
// Functions
let fightOrSkip = function() {
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    if (promptFight === "" || promptFight === null) {
        window.alert("you need to provide a valid response");
        return fightOrSkip();
    }
    
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip"){
        var confirmSkip = window.confirm("are you sure you would like to give up on this fight?");
        
        
        
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
}

var fight = function(enemy) { //FIGHT FUNCTION
    let isPlayersTurn = true;
    if (Math.random() > 0.5){
        isPlayersTurn = false;
    }
    console.log(enemy);
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayersTurn) {

            if (fightOrSkip()) {
                break;
            }

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + "now has " + enemy.health + " health remaining!"
            );
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left");
            }
        }
        else //Switches turns
        {
        var damage = randomNumber(enemy.attack-3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + "now has " + playerInfo.health + " health remaining!"
        );
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left!");
        }
        }
        isPlayersTurn = !isPlayersTurn;
    }
 }

let startGame = function () {

    playerInfo.reset();    

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            console.log (playerInfo.health);
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);
            if (i < enemyInfo.length -1){
                let storeConfirm = window.confirm("THe fight is over. Visit shop?");
                if (storeConfirm) {
                    shop();
                }
                
            }
        }
        else {
            window.alert("you have lost your robot in battle! Game Over!");
            break;
        }
    }
    //End game after loop
    endGame();
}

let endGame = function () {

    if (playerInfo.health > 0) {
        window.alert("Congrats bby, you survived the game! you have a score of " + playerInfo.money);
    }
    else
    {
        window.alert("You lost dude");
    }
    let playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    }
    else {
        window.alert("TY for playing");
    }
}

let shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth;
            break;
        case 2:
            playerInfo.upgradeAttack();
            break
        case 3:
            window.alert ("Leaving store");
            break;
        default:
            window.alert ("Please pick a valid option yo");
            shop();
            break;
    }

}
let randomNumber = function (min, max) {
    let value = Math.floor(Math.random(max - min +1)+min);
    return value;
}

let getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("what is your robot's name?");
    }
    console.log ("you robots name it "+ name);
    return name;
}


var playerInfo = {
    name : getPlayerName(),
    health : 100,
    attack : 10,
    money : 10,
    reset : function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        
        if (this.money >= 7) {
            window.alert ("refilling player's health for 7 bucks");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("YOU DONT HAVE THE MONEY!!!");
        }
    },
    upgradeAttack: function () {
        
        if (this.money >= 7) {
            window.alert ("upgrading players attack fro 7 bucks");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("YOU DONT HAVE THE MONEY!!!");
        }
    }

};

var enemyInfo = [
    {
        name : "Robort",
        attack : randomNumber(10,14)
    },
    {
        name : "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name : "Mecha-Hitler",
        attack: randomNumber(10,14)
    }
];
//start game when page loads

startGame();