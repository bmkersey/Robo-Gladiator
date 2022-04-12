//sets initial health attack and asks for robot name//
var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values like this//
console.log(playerName,playerHealth,playerAttack);

//initial enemy stats//
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "Fight" //

var fight = function(){
    //alert that round is starting//
    window.alert("Welcome to Robot Gladiators!");
    //player attack//
enemyHealth = enemyHealth - playerAttack;
    //log message showing proof//
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remamining.");

    //enemy health check//
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");
    }
    else {
        window.alert(playerName + " has attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining.")
    }
    //enemy attack//
    playerHealth = playerHealth - enemyAttack

    //log message proof//
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remamining.");
        
    //player health check//
    if (playerHealth <=0) {
        window.alert(playerName + " has died.")
    }
    else {
        window.alert (
            enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    }
};





// Start of gameplay//---------------------------------------------------------------------------------------------

//runs fight function
fight();