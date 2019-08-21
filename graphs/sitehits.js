/*
  Implement a class to track the number of site accesses in the last 5 minutes
*/

class Site {
  constructor() {
    this.times = [300].fill(0);
    this.hits = [300].fill(0);
  }
  
  print() {
    console.log(this.times);
    console.log(this.hits);
  }

  access(timestamp) {
    const {times, hits} = this;
    let index = timestamp % 300;

    if (times[index] != timestamp) {
        times[index] = timestamp;
        hits[index] = 1;
    } else {
        hits[index]++;
    }
  }
  
  getNumAccess(timestamp) {
    const {times, hits} = this;
    let total = 0;
    for (let i = 0; i < 300; i++) {
        if (timestamp - times[i] < 300) {
            total += hits[i];
        }
    }
    return total;
  }

}

let site = new Site();
var date = new Date();
var timestamp = date.getTime();
site.access(timestamp);
site.print();
site.access(timestamp+1);
site.print();
site.access(timestamp+2);
site.print();
site.access(timestamp+300);
site.print();
console.log("***********");
console.log(site.getNumAccess(300));

describe('personObject', () => {
  it('it will add food to favoriteFood list', () => {
      expect(person).to.equal({
      name: 'ken',
      favoriteFood: ['apple', 'ramen']
    })
  })
})
