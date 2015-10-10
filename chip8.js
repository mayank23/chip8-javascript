var Chip8 = function(){
  this.V = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  this.memory = [];
  this.PC = 0x200;
  this.stack = [];
  this.SP = 0;
  this.delay = 0;
  this.sound = 0;
  this.currentGameProperties = {
    currentGameId: '',
    currentGameByteSize: 0
  };
};

Chip8.prototype.loadRom = function(gameId){
    console.log("Loading rom");
    document.getElementById('loadingDiv').innerHTML = 'Loading...';
    this.currentGameProperties.currentGameId = gameId;
    this.currentGameProperties.currentGameByteSize = games[gameId].length;
    var gameRom = games[this.currentGameProperties.currentGameId];

    var memoryIndex = 0x200;
    for(var i=0;i<gameRom.length;i++){
      this.memory[memoryIndex+i] = gameRom[i];
    }

    document.getElementById('loadingDiv').innerHTML = 'Ready to play!';
    this.dumpMemory();
    this.run();
};

Chip8.prototype.run = function(){
    var lastGameByte = 0x200 + this.currentGameProperties.currentGameByteSize - 1;
    while(this.PC < lastGameByte ){
      var currentInstruction = this.memory[this.PC];
      var currentInstructionType = (currentInstruction & 0xF000) >>> 12;
      switch(currentInstructionType){
        case 0x0:
          InstructionSet[0]();
        break;
        case 0x1:
          InstructionSet[1]();
        break;
        case 0x2:
          InstructionSet[2]();
        break;
        case 0x3:
          InstructionSet[3]();
        break;
        case 0x4:
          InstructionSet[4]();
        break;
        case 0x5:
          InstructionSet[5]();
        break;
      }
      this.PC++;
    }
};

Chip8.prototype.gameSelect = function(){
    var gameSelectionValue = document.getElementById('gameSelectTag').value;
    this.loadRom(gameSelectionValue);
};

Chip8.prototype.dumpMemory = function(){
    var memoryDump = '';
    for(var i=0x200;i<0xFFF && i < 0x200 + this.currentGameProperties.currentGameByteSize;i++){
      var mostSignificantByte = (this.memory[i] & 0xFF00) >>> 8;
      var leastSignificantByte = (this.memory[i] & 0x00FF);
      memoryDump += mostSignificantByte + ' ' + leastSignificantByte + ' ';
      if(i % 20 == 0){
        memoryDump += '<br>';
      }
    }
    document.getElementById('debugDisplay').innerHTML = memoryDump;
};

var InstructionSet = [
  function(){
    console.log('0x0');
    var canvas = document.getElementById('graphicDisplay');
  },
  function(){
    console.log('0x1');
  },
  function(){
    console.log('0x2');
  },
  function(){
    console.log('0x3');
  },
  function(){
    console.log('0x4');
  },
  function(){
    console.log('0x5');
  }
];

var System = new Chip8();

window.onload = function(){
// intialize canvas
var canvas = document.getElementById('graphicsDisplay');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,300,300);
};
