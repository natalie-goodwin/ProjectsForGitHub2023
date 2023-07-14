/* This app will manage teams and players on the teams*/
/* Player Class; create a player that holds a position, and describe that player*/
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    } /*this class has parameters of player name and position on team */

    describe() {
        return `${this.name} plays ${this.position}`; 
    } /*describe is a methods that will printout the name 
    of the player and position; classes have methods */
}

/* Team Class; creates a team */ 
class Team {
   constructor(name) {
        this.name = name;
        this.players = []; /* This array will hold all the 
        players on the team; this is a blank array where names
        of team will be added*/
   } 

   addPlayer(player){
        if (player instanceof Player) { 
            /* 'instanceof' operator makes sure the player is an instance of 
            the player class */ 
            this.players.push(player); 
            /* this will push a player to the players array
            above; addPlayer is a method for the Team class;
            it is written as if/else b/c if the name is a player
            it can be added, but if someone tries to add a non-name
            it will throw an error -- only take a string*/
        } else; {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);    
        }
    }

    describe(){ 
        /*this allows us to print out name of player and how many players are 
        on the team*/
        return  `${this.name} has ${this.players.length} players.`;
    } /*this will print out name of team and players */ 
}

/*This is the Menu Class: it drives the application and all the choices; 
this is the menu itself  */
class Menu {
   constructor() { /*constructor doesn't take arguments, but we initialize team*/
        this.teams = []; /* array exists to allow for multiple teams within the application*/
        this.selectedTeam = null; /*set equal to null because when we start, no teams are 
        selected*/
   } 

   start() { /*this starts up the application - the entry point to the application*/
        let selection = this.showMainMenuOptions(); /* here we start using methods that don't
        exist yet; top-down development approach: what we think it will look like, and then implement the methods   */
        
        while (selection != 0){ /*gets user input for the 
        option in the menu that the user selects; 
        0 is the exit method, and the user has not yet 
        selected; below are the methods that can be selected, but
        their functionality is not yet created*/ 
            switch (selection) { /*this method returns the 
            selection the user gives us; this is what will happen
            with each selection*/
                case '1': 
                    this.createTeam(); /* these methods don't exist yet; these are placeholders
                    that will later be implemented*/
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3': 
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default: 
                    selection = 0; 
            }

            selection = this.showMainMenuOptions(); /*this is listed 
            again to make sure it keeps looping as long as we 
            don't select 0 or 1-4 */ 
        }

        alert('Goodbye!'); /* this will display if user selects 0 because we are now out 
        of the loop where selection != 0, and it's now false */ 

    }

    showMainMenuOptions() { 
       /* this is where we start implementing our methods for the application */
        /*this creates pop-up box that asks user for input; and we are returning input that 
        comes back from the prompt */
        return prompt(`   
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        /*takes the description of the team, prints out the info, and returns the user 
        input*/
        return prompt (`
        0) back
        1) create player
        2) delete player
        ---------------------
        ${teamInfo}
        `);
    }

    displayTeams() { 
        let teamString = '';
        /* creates a blank string, iterates through the teams, 
        grab each team and get 
        the specific name for the team and add a new line so all 
        the teams show up with 
        an index numbering them */
        for (let i = 0; i < this.teams.length; i++) {
          teamString += i + ') ' + this.teams[i].name + '\n';  
        } /*'this.teams' is all the teams that exist */

        alert(teamString); /*this makes it possible to see all the teams */ 
    }

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
       /* we want to see the details of a specific team */ 
        let index = prompt ('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            /*validate input to avoid crashing and errors; if this was less than 0 or  
            greater than length of team's array, we would get an error*/
            this.selectedTeam = this.teams[index]; 
            /*we've validated the index and set the selectedTeam class property 
            to the team that was input by the user*/
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            /* add a description of all the players to the team with the for-loop*/
            
            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name 
                    + ' - ' + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            /* we are going to pass in the description we just built up to our 
            showTeamMenuOptions and we will implement this method to display the team 
            and show all the options for the team*/ 
            switch (selection) {
                /* this switch is a sub-menu of the full menu; it is not the same 
                as the previous switch above*/ 
                case '1':
                    this.createPlayer();
                    break; 
                case '2': 
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1); /* will remove one 
            element at the position index*/
        }
    }
}

let menu = new Menu(); /*this creates an instance of the menu so we can run the menu */
menu.start(); /*this calls the start */

