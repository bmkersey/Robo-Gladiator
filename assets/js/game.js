//Game states
// WIN - Player robot has defeated all enemy robots
//  *Fights all enemy robots
//  *defeats all robots

//LOSE - Player HP gets to 0 or less






//sets initial health attack and asks for robot name//
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
    while(enemyHealth > 0 && playerHealth > 0){

    
        //checks to see if player wnats to fight or skip//
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "skip" || promptFight === "SKIP"){
            var confirmSkip = window.confirm("Are you sure you want to quit?")
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        //if they decided to fight run this//
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //player attack//
            enemyHealth = enemyHealth - playerAttack;
            //log message showing proof//
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remamining.");

            //enemy health check//
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died.");
                break;
            }
            else {
                window.alert(playerName + " has attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining.");
                //enemy attack//
                playerHealth = playerHealth - enemyAttack;
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
                    enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
            }
        } 
           
        
        //if they dont know what skip or fight is//
        else {
            window.alert("You need to choose a valid option.");
        }
    }    
}
       






// Start of gameplay//---------------------------------------------------------------------------------------------

//runs fight function
for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    
    fight(pickedEnemyName);
}