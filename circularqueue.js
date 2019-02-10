class circularQueue 
{ 
  constructor(s) 
  { 
      this.front = this.rear = -1; 
      this.size = s; 
      this.arr = new Array(s); 
  }
  /* Function to create Circular queue */
  enQueue(value) 
  { 
      if ((this.front == 0 && this.rear == this.size-1) || 
              (this.rear == (this.front-1)%(this.size-1))) 
      { 
          console.log("\nQueue is Full"); 
          return; 
      } 
    
      else if (this.front == -1) /* Insert First Element */
      { 
        this.front = this.rear = 0; 
        this.arr[this.rear] = value; 
      } 
    
      else if (this.rear == this.size-1 && this.front != 0) 
      { 
          this.rear = 0; 
          this.arr[this.rear] = value; 
      } 
    
      else
      { 
          this.rear++; 
          this.arr[this.rear] = value; 
      } 
  } 
    
  // Function to delete element from Circular Queue 
  deQueue() 
  { 
      if (this.front == -1) 
      { 
          console.log("\nQueue is Empty"); 
          return Number.MIN_VALUE; 
      } 
    
      let data = this.arr[this.front]; 
      this.arr[this.front] = -1; 
      if (this.front == this.rear) 
      { 
          this.front = -1; 
          this.rear = -1; 
      } 
      else if (this.front == this.size-1) 
          this.front = 0; 
      else
          this.front++; 
    
      return data; 
  } 
    
  // Function displaying the elements 
  // of Circular Queue 
  displayQueue() 
  { 
      if (this.front == -1) 
      { 
          console.log("\nQueue is Empty"); 
          return; 
      } 
      console.log("\nElements in Circular Queue are: "); 
      if (this.rear >= this.front) 
      { 
          for (let i = this.front; i <= this.rear; i++) 
              console.log("%d ",this.arr[i]); 
      } 
      else
      { 
          for (let i = this.front; i < this.size; i++) 
              console.log("%d ", this.arr[i]); 
    
          for (let i = 0; i <= this.rear; i++) 
              console.log("%d ", this.arr[i]); 
      } 
  } 
  
}; 
  
  

    let q = new circularQueue(5);
    q.enQueue(14); 
    q.enQueue(22); 
    q.enQueue(13); 
    q.enQueue(-6); 
  
    // Display elements present in Circular Queue 
    q.displayQueue(); 
  
    // Deleting elements from Circular Queue 
    console.log("\nDeleted value = %d", q.deQueue()); 
    console.log("\nDeleted value = %d", q.deQueue()); 
  
    q.displayQueue(); 
  
    q.enQueue(9); 
    q.enQueue(20); 
    q.enQueue(5); 
  
    q.displayQueue(); 
  
    q.enQueue(20); 
    // return 0;

    // christmas tree
    // let Tree = new Array(10);
    // for (let i = 0; i < 10; i++) {
    //   Tree[i] = new Array(10);
    //   for (let j = i; j < 10; j++)
    //     Tree[i][j] = " ";
    //   for (let k = 0; k < (2 * i + 1); k++)
    //       Tree[i][k] = "*"
    // }

    // var n = 8;
 
    // for(i=1; i<=n; i++)
    // { 
    //     //Prints trailing spaces
    //     for(j=i; j<n; j++)
    //     {
    //         document.write(" ");
    //     }
 
    //     //Prints the pyramid pattern
    //     for(j=1; j<=(2*i-1); j++)
    //     {
    //         document.write("*");
    //     }
 
    //     document.write("<br>");

    // }
