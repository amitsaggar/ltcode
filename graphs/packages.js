/* 
    Tested the function against all sort of sample Data provided and it works with sample inputs given along with the problem.
    But i'm not clear with the stdIn & stdOut so not able to clear the tests case. 
    I'm not familiar with HackerRank and tried various things to make it work, but it is not working.
    Please try the processData method with any sample output and it would console.log desired Output.
*/
function processData(input) {

  var depencyList = {}; // Adjacency List {P1]: [dep1, dep2]} etc
  var packagesList = {}; // Final Packages Hashmap
  var outDependencyList = {}; // This is used to check outWards dependencies

  let commands = input.split("\n");
  let numberCommands = parseInt(commands[0], 10);

  for(var i = 1 ; i <= numberCommands; i++) {
      var currrentCommandParams = commands[i].split(' ');
      let command = currrentCommandParams[0];
      switch(command) {
          case "DEPEND":
              console.log(commands[i]);
              var currrentCommandParamArg = currrentCommandParams.slice(1);
              addDependency(currrentCommandParamArg, depencyList, outDependencyList);
              break;
          case "INSTALL":
              console.log(`INSTALL ${currrentCommandParams[1]}`);
              installPackages(currrentCommandParams[1], depencyList, packagesList);
              break;
          case "REMOVE":
              console.log(`REMOVE ${currrentCommandParams[1]}`);
              removePackages(currrentCommandParams[1], depencyList, outDependencyList, packagesList);
              break;            
          case "LIST":
              console.log(`LIST`);
              listPackages(packagesList);
              break; 
          case "END":
              console.log('END');
              break;
      }
      
  } // end for loop

  
  /* 
    Add dependencies - 
    Adding dependency graph both inbound and outbound in global Objects/hashtable defined.
  */
  function addDependency(packages, depencyList, outDependencyList) {
    let mainPackage = packages[0];
    let dependencies = packages.slice(1);
    for(let i = 0 ; i < dependencies.length; i++) {
        let dependency = dependencies[i];
        // check for cyclic dependency and ignoring if cycle found.
        if(depencyList[dependency] && depencyList[dependency].indexOf(mainPackage) >= 0) {
            console.log(`${dependency} depends on ${mainPackage}, ignoring command`);
            continue;
        }
        // creating out dependency adjacency list.
        if(outDependencyList[dependency] == undefined) {
            outDependencyList[dependency] = [];
        }
        outDependencyList[dependency].push(mainPackage);
        
        // creating in dependency adjacency list.
        if(depencyList[mainPackage] == undefined) {
            depencyList[mainPackage] = [];
        }
            depencyList[mainPackage].push(dependency);
    }
  }  

  // Install Packages Method.
  /* 
    Install packages checks for package already installed.
    If not, then look for dependencies and recursively call installpackage on dependency.
  */  
  function installPackages(package, depencyList, packagesList) {
      // if package is not installed 
      if(!packagesList[package]) {

      let dependencies = depencyList[package] || []; 
      // install the dependency packages if not installed. 
      dependencies.forEach(dependency => {
          if(!packagesList[dependency]) {
              installPackages(dependency, depencyList, packagesList);
          }
      });
      // At this step all dependencies are installed, so installing final package. 
      packagesList[package] = true;
      console.log(`Installing ${package}`);
      } else {
          // Package is already installed.
          console.log(`${package} is already installed`);
      }
  }

  // remove packages
  /* 
    Most Imp - We are removing packages and their unused dependent packages.
  */   
  function removePackages(package, depencyList, outDependencyList, packagesList) {   
      if(packagesList[package]) { 
          // check if this package is on the dependencylist of any package, if true then dont remove.
          if(outDependencyList[package] && isOutDependenceStillInstalled(outDependencyList[package], packagesList)) {
            console.log(`${package} is still needed`);
            return;
          }
          // if not removing the package.
          delete packagesList[package] ;
          console.log(`Removing ${package}`);
          let dependencies = depencyList[package] || [];
          // after removing the package, check if any of the dependencies of this package 
          // dont have any outgoing dependencies currently installed. if not, remove this dependency too. 
          dependencies.forEach(dependency => {
            removePackages(dependency, depencyList, outDependencyList, packagesList);
          });
          } else {
              console.log(`${package} is not installed`);
          }
  }

  /* 
    Helper method used by removePackages to check if any of the outbound depedencies  in the list are current installed.
  */   
  function isOutDependenceStillInstalled(outDependencyList, packagesList) {
      for(var i =0; i < outDependencyList.length; i++) {
          if(packagesList[outDependencyList[i]]) {
              return true;
          }
      }
      return false;
  }

  // List Packages - Simply output the Packagelist keys
  function listPackages(packagesList) {
    let keys = Object.keys(packagesList) || [];
    keys.forEach(element => {
        console.log(element);
    });
  }
} 

let k = "6\nDEPEND A B\nDEPEND B C\nINSTALL A\nREMOVE A\nLIST\nEND\n";
k = "1\nEND\n";
processData(k);