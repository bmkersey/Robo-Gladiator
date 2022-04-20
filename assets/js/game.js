//Game states
// WIN - Player robot has defeated all enemy robots
//  *Fights all enemy robots
//  *defeats all robots

//LOSE - Player HP gets to 0 or less



var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max - min +1) + min);
    return value;
}

var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
}

//sets initial health attack and asks for robot name//
var playerInfo = {
name: getPlayerName(),
health: 100,
attack: 10,
money: 10,
reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
    },
refillHealth: function(){
    if (this.money >=7){
        window.alert("Refilling players health by 20 for 7 dollars.")
        this.health += 20;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money.")
    }
},        
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading attack by 6 for 7 dollars.")
        
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money.")
        }
    }

}



//initial enemy stats//
var enemyInfo= [
    {name: "Roborto",
    attack: randomNumber(10,14)
    },
    {name: "Andyroid",
    attack:randomNumber(10,14)
    },
    {name: "Megatron",
    attack: randomNumber(10,14)
    }

];


var fightOrSkip = function(){
    // does player wish to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip()
    }

    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip"){
        var confirmSkip = window.confirm("Are you sure you want to quit?")
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip this fight. Goodbye.");
                playerInfo.money = Math.max(0,playerInfo.money - 10);
                return true;
                
            }
    } 
     return false;   
}

// this creates a function named "Fight" //

var fight = function(enemy){
    
    while(enemy.health > 0 && playerInfo.health > 0){
        if (fightOrSkip()){
            break;
        }
    
           

        
            //player attack//
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage)
            //log message showing proof//
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remamining.");

            //enemy health check//
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died.");
            break;
        } else {
            window.alert(playerInfo.name + " has attacked " + enemy.name + " for " + damage + " damage. " + enemy.name + " has " + enemy.health + " health remaining.");
                //enemy attack//
           var damage = randomNumber(enemy.attack-3, enemy.attack)
           playerInfo.health = Math.max(playerInfo.health - damage)
        }
            
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remamining.");
                
            //player health check//
        if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died.");
            break;
        } else {
            window.alert (
                enemy.name + " has attacked " + playerInfo.name + " for " + damage + " damage. " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );
            };
    }    
           
        
        

        
        
}  
//runs fight function//
var startGame = function(){
    
   playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++){
        
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
debugger;
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60)
            fight(pickedEnemyObj);
            if (i < enemyInfo.length - 1 && playerInfo.health > 0){
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
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
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
           playerInfo.refillHealth();
                break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            
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



// Start of gameplay//---------------------------------------------------------------------------------------------
startGame();