class Installer 
{ 
    constructor(components) 
    {
      this.components = components;
      this.depencyList = {};
    }
  
    addDependency(v, w) 
    { 
      const { depencyList } = this;
  
      if(!depencyList[v])
        depencyList[v] = [];
      
      depencyList[v].push(w); // Add w to v’s list. 
    }

    printDependcies(i) {
      console.log( this.depencyList[5] );
    }

    installComponent(component) 
    { 
        const { components } = this;
        let stack = [];
      
        // Mark all the components as not visited 
        let visited = new Array(components).fill(false);
        this.topologicalSortUtil(component, visited, stack); 
      
        // Print contents of stack 
        while (stack.length > 0) 
        { 
            console.log(stack.pop());
        }
    } 

    // A recursive function used by topologicalSort 
    topologicalSortUtil(v, visited, stack) 
    { 
        const { depencyList } = this;

        // Mark the current node as visited. 
        visited[v] = true; 
      
        // Recur for all the components dependencies to this component 
        let neighbors = (depencyList[v] != undefined) ? depencyList[v] : [];
        for (let i of neighbors) 
            if (!visited[i]) 
                this.topologicalSortUtil(i, visited, stack); 
      
        // Push current vertex to stack which stores result 
        stack.push(v); 
    } 
  
    topologicalSort() 
    { 
        const { components } = this;
        let stack = [];
      
        // Mark all the components as not visited 
        let visited = new Array(components).fill(false);

        // Call the recursive helper function to store Topological 
        // Sort starting from all components one by one 
        for (let i = 0; i < components; i++) {
          if (visited[i] == false) 
            this.topologicalSortUtil(i, visited, stack); 
        }
      
        // Print contents of stack 
        while (stack.length > 0) 
        { 
            console.log(stack.shift());
        } 
    } 
}

    // Create a graph given in the above diagram 
    let g = new Installer(6); 
    g.addDependency(5, 2); 
    g.addDependency(5, 0); 
    g.addDependency(4, 0); 
    g.addDependency(4, 1); 
    g.addDependency(2, 3); 
    g.addDependency(3, 1); 

    // g.printDependcies(5);
    g.installComponent(5);
    // g.topologicalSort(); 