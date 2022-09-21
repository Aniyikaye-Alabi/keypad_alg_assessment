    /*
    WRITTEN BY YOURS TRULY ANIYIKAYE ALABI
    VALID NUMBERS ARE GENERATED USING THE ROOK CHESS PIECE
    THIS IS A JAVASCRIPT FILE, IT IS RECOMMENDED TO RUN THIS FILE IN
    A CONSOLE OR TERMINAL ENVIRONMENT LIKE NODE.
     */
    
    // Initialize keypad items in an array
    let keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
        ];
        
        
    let realPhoneNo = "";
    let phone_no = [];
    let storeNum;

    for(x = 0; x < 7; x++){
    
        // Start number
        let startNum;

        // Valid numbers to be randomize
        var validnum = [];
        if (phone_no.length == 0) {
          startNum = 3;
        }
        else{
          startNum = storeNum;
        }
        
        // loop into the keypads
        for(i = 0; i < keypad.length; i++){
          for(j=0; j < keypad[i].length; j++){
              if(keypad[i][j] == startNum){
                var a = keypad[i].concat(keypad.map(e => e[keypad[i].indexOf(keypad[i][j])])); //pick the rows and columns of the seleceted startnum based on the rook piece.
                validnum = a;
              }
            }
        
        }
        
        let filteredarray = validnum.filter(x => x != startNum && x != '*' && x != '#'); // Don't pick the the original startnum, *, #.
        let randomIndexNum = Math.floor(Math.random() * filteredarray.length);
        
        phone_no.push(startNum);
        storeNum = filteredarray[randomIndexNum]; // select next number from the filtered valid number lists.
    
    }

    phone_no.forEach(element => {
      realPhoneNo += element; // populate realPhoneNo with all the phone numbers.
    });
    var realPhoneNoFormat = realPhoneNo.slice(0, 3) + "-" + realPhoneNo.slice(3);

    if(realPhoneNoFormat[0] != '0' && realPhoneNoFormat[0] != '1'){
      console.log(realPhoneNoFormat);
    }
    else{
      console.log("Invalid number is generated, number cannot start with 0 or 1");
    }
        