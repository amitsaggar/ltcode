import {EmailParser} from "./email-parser.js";

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