var Chip8 = function(){
  this.V = [];
  this.memory = [];
  this.PC = 0x200;
  this.stack = [];
  this.SP = -1;
  this.delay = 0;
  this.sound = 0;
  this.I = 0;
  this.currentGameProperties = {
    currentGameId: '',
    currentGameByteSize: 0
  };
  this.screenWidth = 64*5;
  this.screenHeight = 32*5;
  this.screenState = [];

  for(var i=0;i<this.screenHeight;i++){
    this.screenState[i] = [];
    for(var j=0;j<this.screenWidth;j++){
      this.screenState[i][j] = 0;
    }
  }
  // initialize registers
  for(var i=0;i<16;i++){
    this.V[i] = 0;
  }
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
      var currentInstruction = 0x0000;
      currentInstruction = (this.memory[this.PC] | currentInstruction) << 8;
      currentInstruction = this.memory[this.PC+1] | currentInstruction;
      var currentInstructionType = (currentInstruction & 0xF000) >>> 12;
      switch(currentInstructionType){
        case 0x0:
          this.opcode0(currentInstruction);
        break;
        case 0x1:
          this.opcode1(currentInstruction);
        break;
        case 0x2:
          this.opcode2(currentInstruction);
        break;
        case 0x3:
          this.opcode3(currentInstruction);
        break;
        case 0x4:
          this.opcode4(currentInstruction);
        break;
        case 0x5:
          this.opcode5(currentInstruction);
        break;
        case 0x6:
          this.opcode6(currentInstruction);
        break;
        case 0x7:
          this.opcode7(currentInstruction);
        break;
        case 0x8:
          this.opcode8(currentInstruction);
        break;
        case 0x9:
          this.opcode9(currentInstruction);
        break;
        case 0xA:
          this.opcodeA(currentInstruction);
        break;
        case 0xB:
          this.opcodeB(currentInstruction);
        break;
        case 0xC:
          this.opcodeC(currentInstruction);
        break;
        case 0xD:
          this.opcodeD(currentInstruction);
        break;
        case 0xE:
          this.opcodeE(currentInstruction);
        break;
        case 0xF:
          this.opcodeF(currentInstruction);
        break;

        default:
        this.PC+=2;
        break;
      }
    }
};

Chip8.prototype.opcode0 = function(opcode){
      console.log('0x0');
      var zeroType = opcode & 0x00FF;
      if(zeroType == 0xE0){
        var canvas = document.getElementById('graphicsDisplay');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,300,300);
      }else
      if(zeroType == 0xEE){
        this.PC = this.stack[this.SP];
        this.stack[this.SP] = 0;
        this.SP--;
      }
      this.PC+=2;
    };
Chip8.prototype.opcode1 = function(opcode){
      console.log('0x1');
      this.PC = opcode & 0x0FFF;
    };
Chip8.prototype.opcode2  = function(opcode){
      console.log('0x2');
      this.SP++;
      this.stack[this.SP] = this.PC;
      this.PC = (opcode & 0x0FFF);
    }
Chip8.prototype.opcode3 =  function(opcode){
      console.log('0x3');
      var kk = opcode & 0x00FF;
      var regIndex = (opcode & 0x0F00) >> 8;
      if(this.V[regIndex] == kk){
        this.PC+=4;
      }else{
        this.PC+=2;
      }
    };
 Chip8.prototype.opcode4 = function(opcode){
      console.log('0x4');
      var kk = opcode & 0x00FF;
      var regIndex = (opcode & 0x0F00) >> 8;
      if(this.V[regIndex] != kk){
        this.PC+=4;
      }else{
        this.PC+=2;
      }
    };
 Chip8.prototype.opcode5 = function(opcode){
      console.log('0x5');
      var regIndex1 = (opcode & 0x0F00) >>> 8;
      var regIndex2 = (opcode & 0x00F0) >>> 4;
      if(this.V[regIndex1] == this.V[regIndex2]){
        this.PC+=4;
      }else{
        this.PC+=2;
      }
    };
  Chip8.prototype.opcode6 = function(opcode){
      console.log('0x6');
      var regIndex = (opcode & 0x0F00) >>> 8;
      this.V[regIndex] = (opcode & 0x00FF);
      this.PC+=2;
    };
 Chip8.prototype.opcode7 = function(opcode){
      console.log('0x7');
      var regIndex = (opcode & 0x0F00) >>> 8;
      this.V[regIndex] += (opcode & 0x00FF);
      this.PC+=2;
    };
 Chip8.prototype.opcode8 = function(opcode){
      console.log('0x8');
      var regIndex1 = (opcode & 0x0F00) >>> 8;
      var regIndex2 = (opcode & 0x00F0) >>> 4;
      var eightType = (opcode & 0x000F);
      switch(eightType){
        case 0:
          this.V[regIndex1] = this.V[regIndex2];
        break;
        case 1:
          this.V[regIndex1] |= this.V[regIndex2];
        break;
        case 2:
          this.V[regIndex1] &= this.V[regIndex2];
        break;
        case 3:
          this.V[regIndex1] ^= this.V[regIndex2];
        break;
        case 4:
          this.V[regIndex1] += this.V[regIndex2];
          if(this.V[regIndex1] > 0xFF){
            // get the last 8 bits.
            var lastEightBits = this.V[regIndex1] & 0xFF;
            this.V[regIndex1] = lastEightBits;
            this.V[0xF] = 1;
          }else{
            this.V[0xF] = 0;
          }
        break;
        case 5:
          if(this.V[regIndex1] > this.V[regIndex2]){
            this.V[0xF] = 1;
          }else{
            this.V[0xF] = 0;
          }
          this.V[regIndex1] -= this.V[regIndex2];
        break;
        case 6:
          if(this.V[regIndex1] & 1){
            this.V[0xF] = 1;
          }else{
            this.V[0xF] = 0;
          }
        break;
        case 7:
          if(this.V[regIndex2] > this.V[regIndex1]){
            this.V[0xF] = 1;
          }else{
            this.V[0xF] = 0;
          }
          this.V[regIndex1] = this.V[regIndex2] - this.V[regIndex1];
        break;
        case 0xE:
          if(this.V[regIndex1] == 128 ){
            this.V[0xF] = 1;
          }else{
            this.V[0xF] = 0;
          }
          this.V[regIndex1]*=2;
        break;
        default:
        break;
      }
      this.PC+=2;

    };

Chip8.prototype.opcode9 = function(opcode){
  var regIndex1 = (opcode & 0x0F00) >>> 8;
  var regIndex2 = (opcode & 0x00F0) >>> 4;
  if(this.V[regIndex1] != this.V[regIndex2]){
    this.PC += 4;
  }else{
    this.PC += 2;
  }
};

Chip8.prototype.opcodeA = function(opcode){
  this.I = (opcode & 0x0FFF);
  this.PC += 2;
};

Chip8.prototype.opcodeB = function(opcode){
  this.PC = (opcode & 0x0FFF) + this.V[0];
};

Chip8.prototype.opcodeC = function(opcode){
  var regIndex = (opcode & 0x0F00) >>> 8;
  var kk = (opcode & 0x00FF);
  this.V[regIndex] = kk & (Math.random() * 255);
  this.PC+=2;
};

Chip8.prototype.opcodeD = function(opcode){
  var regIndex1 = (opcode & 0x0F00) >>> 8;
  var regIndex2 = (opcode & 0x00F0) >>> 4;
  var n = (opcode & 0x000F);
  
  var x = this.V[regIndex1] % this.screenWidth;
  var y = this.V[regIndex2] % this.screenHeight;
  var canvas = document.getElementById('graphicsDisplay');
  var ctx = canvas.getContext('2d');

  for(var memoryIndex = this.I; memoryIndex < this.I + n;memoryIndex++){
    var currentByte = this.memory[memoryIndex];
    for(var shift = 7;shift >=0;shift--){
      var currentPixelStateOn = (currentByte >>> shift) & 1;
      console.log("Draw on:",x,",",y);
      if(this.screenState[y][x] ==1 && currentPixelStateOn){
        this.V[0xF] = 1;
      }else{
        this.V[0xF] = 0;
      }
      currentPixelStateOn ^= this.screenState[y][x];
      if(currentPixelStateOn){
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(x,y,5,5);
      }else{
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(x,y,5,5);
      }
      x = ((x+1)*5) % this.screenWidth;
    }
    y = ((y+1)*5) % this.screenHeight;
  }
  this.PC+=2;
};

Chip8.prototype.opcodeE = function(opcode){
  this.PC+=2;
};

Chip8.prototype.opcodeF = function(opcode){
  this.PC+=2;
};

Chip8.prototype.gameSelect = function(){
    var gameSelectionValue = document.getElementById('gameSelectTag').value;
    this.loadRom(gameSelectionValue);
};

Chip8.prototype.dumpMemory = function(){
    var memoryDump = '';
    for(var i=0x200;i<0xFFF && i < 0x200 + this.currentGameProperties.currentGameByteSize;i++){
      memoryDump += this.memory[i] + ' ';
      if(i % 20 == 0){
        memoryDump += '<br>';
      }
    }
    document.getElementById('debugDisplay').innerHTML = memoryDump;
};

var System = new Chip8();


window.onload = function(){
  // intialize canvas
  var canvas = document.getElementById('graphicsDisplay');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,300,300);
};
