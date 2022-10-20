class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
  addPlayer() {
    var playerIndex = 'players/player' + this.index;
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony
    });
  }
  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on('value', data => {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref('/').update({ playerCount: count });
  }
  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on('value', data => {
      allPlayers = data.val();
    });
  }
}
