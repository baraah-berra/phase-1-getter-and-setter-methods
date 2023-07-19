class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Setter method for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  