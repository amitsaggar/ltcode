import EmailParser from './email-parser';

beforeAll(() => {
  parser = new EmailParser()  
});

describe('EmailParser', () => {
  it('Test email 1', () => {
    const decoded = parser.decodeHeaders("From: \"Cliff Clavin\"<cliff@cheers.com>\n\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
    expect(decoded).to.be.equal("From: \"Cliff Clavin\"<cliff@cheers.com>\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
  });

  it('Test email 2', () => {
    const decoded = parser.decodeHeaders("From: \"Cliff Clavin\"<cliff@cheers.com>\n\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nSubject: What! What!\n\nMade it!!!!\n\nYay!");
    expect(decoded).to.be.equal("From: \"Cliff Clavin\"<cliff@cheers.com>\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\nSubject: What! What!\n\nMade it!!!!\n\nYay!");
  });

  it('Test email 3', () => {
    const decoded = parser.decodeHeaders("From: \"Cliff Clavin\"<cliff@cheers.com>\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
    expect(decoded).to.be.equal("From: \"Cliff Clavin\"<cliff@cheers.com>\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\n\nMade it!!!!\n\nYay!");
  });
  
  it('Test email 4', () => {
    const decoded = parser.decodeHeaders("From: \"Cliff Clavin\"<cliff@cheers.com>\r\n\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\n\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");
    expect(decoded).to.be.equal("From: \"Cliff Clavin\"<cliff@cheers.com>\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");
  });
  
  it('Test email 5', () => {
    const decoded = parser.decodeHeaders("From: \"Cliff Clavin\"<cliff@cheers.com>\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");
    expect(decoded).to.be.equal("From: \"Cliff Clavin\"<cliff@cheers.com>\r\nTo: \"Randall Flagg\" <walkindude@lasvegas.com>\r\nSubject: What! What!\r\n\r\nMade it!!!!\r\n\r\nYay!");
  });  
});