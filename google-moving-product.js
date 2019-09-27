/* 
Design a data structure to calculate the moving product of all elements in a sliding window of size k.

class SlidingWindow {

    public SlidingWindow(int k) {
    }
    
    public void add(int val) {
    }

	public int getProduct() {
	}
}
All methods should work in O(1) time.

Example:

SlidingWindow window = new SlidingWindow(3);
window.add(1); // [1]
window.add(2); // [1, 2]
window.getProduct(); // 2
window.add(3); // [1, 2, 3]
window.getProduct(); // 6
window.add(4); // [2, 3, 4]
window.getProduct(); // 24
You can assume that a product will fit into a single 32-bit integer without overflowing.
*/

class SlidingWindow {
  constructor(k) {
    this.slider = new Array(k);
    this.k = k;
    this.counter = 0;
    this.product = 1;
  }
  
  add(val) {
    const { slider, counter, k, product } = this;
    if( counter < k ) {
      slider.push(val);
      this.product *= val;
    } else {
      let loc = counter%k - 1;
      let temp = slider[loc];
      this.product = product/temp * val;
      this.slider[loc] = val;
    }
  }

  getProduct() {
    const { product } = this;
    console.log(product);
    return product;
  }
}

let window = new SlidingWindow(3);
window.add(1); // [1]
window.add(2); // [1, 2]
window.getProduct(); // 2
window.add(3); // [1, 2, 3]
window.getProduct(); // 6
window.add(4); // [2, 3, 4]
window.getProduct(); // 24