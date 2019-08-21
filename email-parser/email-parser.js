/* 
  Email Parser
    Brute Force:
      Read email as input string.
      Split email for new line (valid for all platforms)
      Parse each line for header decoders ( : )
      carraige feed/new line can be checked and flagged in the begining.
      join headers with newline based on flag.
      join body too based on flag (Oops we need to maintain the sanity here).
      return email parsed string.
    Unit test:
      Very simple unit test
      Added using jest and enzyme.

    Improvemed New Version:
      Tried to write regex for each header from validHeaders list.
      Strip them out from email template and combine them with new line (based on flag)
      Body starts from last matched index of header - i.e Stripped version of email is left with body.
      Append body to combined headers.
    Unit test:
      Very simple unit test
      Added using jest and enzyme.

    Future - 
      Wrap parser call with async await
      return promise from parser.
      Would use File System npm- fs.createReadStream(path, [options]) to read all email files from path.
    Unit test:
      Would improve unit tests.
*/

class EmailParser {
  constructor() {
      this.validHeaders = [
        'message-id',
        'content-id',
        'from',
        'to',
        'sender',
        'in-reply-to',
        'reply-to',
        'subject',
        'date',
        'content-disposition',
        'content-type',
        'content-transfer-encoding',
        'priority',
        'mime-version',
        'content-description',
        'precedence',
        'errors-to'
    ];    
  }

  decodeHeader(headerLine) {
    let line = (headerLine || '')
            .toString()
            .replace(/(?:\r?\n|\r)[ \t]*/g, ' ')
            .trim(),
        match = line.match(/^\s*([^:]+):(.*)$/),
        key = ((match && match[1]) || '').trim(),
        value = ((match && match[2]) || '').trim();

      // We can easily add validation for headers.
      if(key == "" || value == "") {
        return null;
      }
      
      return {
          key,
          value
      };
  }

  // Old version - B.F way
  decodeHeadersOld(email) {
      
      if(!email) return;

      let lines = email.split(/\r?\n|\r/),
          headersObj = {},
          decodedH,
          i,
          len,
          finalEmailHeader = "",
          finalEmailBody = "",
          carrFlag = (/[\r\n]/).test(email);
      
      if(carrFlag)
        finalEmailBody += "\r\n";
      else 
        finalEmailBody += "\n";

      for (i = lines.length - 1; i >= 0; i--) {
          if (i && lines[i].match(/^\s/)) {
              lines[i - 1] += '\r\n' + lines[i];
              lines.splice(i, 1);
          }
      }

      for (i = 0, len = lines.length; i < len; i++) {
          decodedH = this.decodeHeader(lines[i], carrFlag);
          if(decodedH) {
            finalEmailHeader = finalEmailHeader.concat(decodedH.key + ': ' + decodedH.value + (carrFlag ? "\r\n" : "\n"));
          } else {
            finalEmailBody = finalEmailBody.concat(lines[i]);
          }
      }

    return finalEmailHeader + finalEmailBody;
  }

  matchExact(r, str) {
    var match = str.match(r);
    return match && str === match[0];
  }

  // New and better
  decodeHeadersNew(email) {
    
    if(!email) return;

    /* Need to figure out how to get this
    let headerEndRx = // Some kind of identifier.
    let bodyPosition = email.indexOf(headerEndRx.exec(email));
    let headerLines = email.substring(0, bodyPosition);
    */
    let headers = new Object();
    let h;
    let lastMatchIndex = 0;
    let finalEmailHeader = "";
    let finalEmailBody = "";
    let carrFlag = (/[\r?$]/).test(email);
    let headerRegExp = (carrFlag) ? /^(.+?): ((.|\r\n\s)+)\r\n/mg : /^(.+?): ((.|\n?\n\s)+)\n?\n/mg;
    
    while (h = headerRegExp.exec(email)) {
        headers[h[1]] = h[2];
        lastMatchIndex = headerRegExp.lastIndex;
    }

    for(var key in headers){
      // check validity here
      if(!this.validHeaders.includes(key.toLowerCase())) {
        delete headers[key];
      } else {
        finalEmailHeader = finalEmailHeader.concat(key + ': ' + headers[key] + (carrFlag ? "\r\n" : "\n"));
      }
    }
    finalEmailBody = email.substr(lastMatchIndex-1);
    
    return finalEmailHeader + finalEmailBody;
  }

}

/* var t0 = performance.now(); */
parser = new EmailParser();
let email1 = parser.decodeHeadersNew("From: \"Cliff Clavin\"<cliff@cheers.com>\n\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
/* var t1 = performance.now(); */
/* console.log("Times to parse small email " + (t1 - t0) + " milliseconds.") */
// Approx - 0.50 ms

let email2 = parser.decodeHeadersNew("From: \"Cliff Clavin\"<cliff@cheers.com>\n\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nSubject: What! What!\n\nMade it!!!!\n\nYay!");
let email3 = parser.decodeHeadersNew("From: \"Cliff Clavin\"<cliff@cheers.com>\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
let email4 = parser.decodeHeadersNew("From: \"Cliff Clavin\"<cliff@cheers.com>\r\n\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\n\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");
let email5 = parser.decodeHeadersNew("From: \"Cliff Clavin\"<cliff@cheers.com>\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");

console.log(email1);
console.log("*****");
console.log(email2);
console.log("*****");
console.log(email3);
console.log("*****");
console.log(email4);
console.log("*****");
console.log(email5);