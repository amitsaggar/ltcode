class Codec {
  constructor() {
    this.map = {};
    this.longUrl = "";
    this.shortUrl = "";
  }

  hashCode(url) {
    let hash = 0;
    this.longUrl = url;
    for (var i = 0; i < this.longUrl.length; i++) {
        var character = this.longUrl.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        // console.log(character + ' - ' + hash + ' - ' + (hash & hash));
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  encode(url) {
    this.longUrl = url;
    // console.log(this.longUrl);
    let key = this.hashCode(this.longUrl);
    this.map[key] = this.longUrl;
    return "http://tinyurl.com/" + this.hashCode(this.longUrl);
  }

  decode(url) {
    this.shortUrl = url;
    return this.map[parseInt(this.shortUrl.replace("http://tinyurl.com/", ""))];
  }
}
codec = new Codec();
encoded = codec.encode("https://leetcode.com/problems/design-tinyurl");
decoded = codec.decode(encoded);

console.log(encoded);
console.log(decoded);