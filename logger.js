var Log = function(id, timeArgs){
  this.id = id;
  this.timeArgs = timeArgs;
}

var LogSystem = function() {
  this.logs = [];
};

/** 
* @param {number} id 
* @param {string} timestamp
* @return {void}
*/
LogSystem.prototype.put = function(id, timestamp) {
  let args = timestamp.split(":");
  let dt = new Date(...args);
  let newlog = new Log(id, args);
  
  this.logs.push(newlog);
  // console.log(newlog);
};

/** 
* @param {string} s 
* @param {string} e 
* @param {string} gra
* @return {number[]}
*/
LogSystem.prototype.retrieve = function(s, e, gra) {
  
  let gransarr = ['Year', 'Month', 'Day', 'Hour', 'Minute', 'Second'];
  let cnt = gransarr.indexOf(gra);
  let sargs = s.split(":").slice(0, cnt+1);
  let eargs = e.split(":").slice(0, cnt+1);
  // console.log(sargs);
  let sdate = new Date(...sargs).getTime();
  let edate = new Date(...eargs).getTime();
  // console.log(sdate);

  let set = [];
  
  this.logs.forEach(function(item){
      let itemArgs = item.timeArgs.slice(0, cnt+1);
      let itemTime = new Date(...itemArgs).getTime();
      
      if(itemTime >= sdate && itemTime <= edate){
         set.push(item.id);
      }
  });
  
  // console.log(set);
  
  return set;
};

/** 
* Your LogSystem object will be instantiated and called as such:
* var obj = Object.create(LogSystem).createNew()
* obj.put(id,timestamp)
* var param_2 = obj.retrieve(s,e,gra)
*/


var obj = new LogSystem()
obj.put(1,"2017:01:01:23:59:59");
obj.put(2,"2017:01:01:22:59:59");
obj.put(3,"2016:01:01:00:00:00");

obj.retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Year");
// obj.retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Hour");