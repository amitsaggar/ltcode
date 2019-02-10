var Logger = function() {
    this.messages = {};
    this.TIME_LIMIT = 10;
};

/**
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if ( !this.messages.hasOwnProperty(message) ) {
        // add to map & return true
        this.messages[message] = timestamp;
        return true;
    }
        
    if (
        this.messages.hasOwnProperty(message) && 
        timestamp - this.messages[message] >= this.TIME_LIMIT
    ) {
        // console.log( timestamp + " - " +  this.messages[message] );
        // update map & return true
        this.messages[message] = timestamp;
        return true;
    }
    
    return false;
};

logger = new Logger();

// logging string "foo" at timestamp 1
console.log(logger.shouldPrintMessage(1, "foo"));

// logging string "bar" at timestamp 2
console.log(logger.shouldPrintMessage(2,"bar"));

// logging string "foo" at timestamp 3
console.log(logger.shouldPrintMessage(3,"foo"));

// logging string "bar" at timestamp 8
console.log(logger.shouldPrintMessage(8,"bar"));

// logging string "foo" at timestamp 10
console.log(logger.shouldPrintMessage(10,"foo"));

// logging string "foo" at timestamp 11
console.log(logger.shouldPrintMessage(11,"foo"));