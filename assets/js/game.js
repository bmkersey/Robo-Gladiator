//Game states
// WIN - Player robot has defeated all enemy robots
//  *Fights all enemy robots
//  *defeats all robots

//LOSE - Player HP gets to 0 or less






//sets initial health attack and asks for robot name//
console.log("hello")
var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



//initial enemy stats//
var enemyNames = ["Roborto","Android 17", "Megatron"];
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "Fight" //

var fight = function(enemyName){
    debugger;
    while(enemyHealth > 0 && playerHealth > 0){
    
        //checks to see if player wnats to fight or skip//
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "skip" || promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you want to quit?")
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye.");
                playerMoney = Math.max(0,playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }
         //if they decided to fight run this//
        
            //player attack//
        var damage = randomNumber(playerAttack-3, playerAttack)
        enemyHealth = Math.max(0, enemyHealth - damage)
            //log message showing proof//
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remamining.");

            //enemy health check//
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            break;
        }
        else {
            window.alert(playerName + " has attacked " + enemyName + " for " + damage + " damage. " + enemyName + " has " + enemyHealth + " health remaining.");
                //enemy attack//
           var damage = randomNumber(enemyAttack-3, enemyAttack)
           playerHealth = Math.max(playerHealth - damage)
        }
            
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remamining.");
                
            //player health check//
        if (playerHealth <=0) {
            window.alert(playerName + " has died.");
            break;
        }
        else {
            window.alert (
                enemyName + " has attacked " + playerName + " for " + damage + " damage. " + playerName + " now has " + playerHealth + " health remaining."
                );
            };
         
           
        
        

    }
}  
//runs fight function//
var startGame = function(){
    
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10
    
    for(var i = 0; i < enemyNames.length; i++){
        debugger;
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40,60)
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0){
                var shopConfirm = window.confirm("The fight is over, visit the store before the next round?")
                if (shopConfirm) {
                    shop()
                }        
            };
        };
        
    }
    //once loop ends, player or enemy is out of health, or enemies to fight run endgame function//
    endGame()
    
};

//end game//
var endGame = function(){
    //if player is still alive player wins!//
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    }
    else{
        window.alert("You have lost your robot in battle. GAME OVER!")
    }

    //play again?//
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart game//
        startGame()
    }
    else{
        window.alert("Thank you for playing Robo Gladiators! Come back soon!");
    }
};

//shop function begin//
var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL','UPGRADE,'LEAVE' to make a choice");
    switch (shopOptionPrompt){
        case "REFILL": 
        case "refill":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars")
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.")
            }
                break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.")
                break;
            }
        case "LEAVE":
        case "leave":
                window.alert("Leaving the shop.")
                break;
            default:
                window.alert("You did not pick a vaild option")
                shop()
                break;

            
    }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max - min +1) + min);
    return value;
}

// Start of gameplay//---------------------------------------------------------------------------------------------
startGame();