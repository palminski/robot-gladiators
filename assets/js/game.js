
// Init Variables
var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName,playerHealth,playerAttack);

var enemyNames = ["Roborto","Amy Android", "Mecha-Hitler"];
var enemyHealth = 50;
var enemyAttack = 12;

// Functions
var fight = function(enemyName) { //FIGHT FUNCTION
    while (enemyHealth > 0 && playerHealth > 0){
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    if (promptFight === "skip" || promptFight === "SKIP")
    {
        var confirmSkip = window.confirm("are you sure you would like to give up on this fight?");
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight!");
                playerMoney = playerMoney -10;
                console.log ("playerMoney",playerMoney)
                break;
            }
            else 
            {
                fight();
            }
    }

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining!"
        );
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney +20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + " health remaining!"
        );
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left!");
        }
    }
    }
    

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}