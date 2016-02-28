class Vector {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  addImm(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
  }

  scaleImm(s) {
    return new Vector(this.x * s, this.y*s);
  }
}

export default class Physics {
  constructor() {
    this.entities = [];
    this.G = 9.80665;
    this.PI = 3.14;

    this.width = 100;
    this.height = 100;
    this.blackHole = new Vector(this.width/2, this.height/2);
  }

  setDims(w, h) {
    this.width = w;
    this.height = h;
    this.blackHole = new Vector(this.width/2, this.height/2);
  }

  move(circle, xp, yp) {

  }

  addCircle(x, y, r) {
    this.entities.push({x, y, r, accel: new Vector(), vel: new Vector()});
  }

  getMass(circle) {
    return 2*this.PI*circle.r*circle.r;
  }

  getDistance(c1, c2) {
    return Math.sqrt(Math.pow(c1.x-c2.x, 2) + Math.pow(c1.y-c2.y, 2));
  }

  scaleForce(f) {
    return f * 0.5;
  }

  gameLoop(time) {
    this.entities.forEach(circle => {
      // Gravity.
      // // Mass if just area of the circle.
      // let mass = this.getMass(circle);
      // // Apply gravity to other circles.
      // this.entities.forEach(otherCircle => {
      //   // Calculate effect of gravity.
      //   let mass2 = this.getMass(otherCircle);
      //   let dx = circle.x - otherCircle.x;
      //   let dy = circle.y - otherCircle.y;
      //   let distance = Math.pow(this.getDistance(circle, otherCircle), 2);

      //   let force = mass*mass2*this.G/distance;
      //   let accel = force/mass2;

      //   let angle = Math.atan2(dy, dx);
      //   let newX = Math.cos(angle)*distance;
      //   let newY = Math.sin(angle)*distance;

      //   otherCircle.accel.add(new Vector(newX, newY));
      // });

      // Calculate effect of gravity.
      let mass2 = this.getMass(circle);
      let dx = this.blackHole.x - circle.x;
      let dy = this.blackHole.y - circle.y;
      let distance = Math.pow(dx*dx + dy*dy, 2);

      let force = mass*100*this.G/distance;
      let accel = force/mass2;

      let angle = Math.atan2(dy, dx);
      let newX = Math.cos(angle)*distance;
      let newY = Math.sin(angle)*distance;

      circle.accel.add(new Vector(newX, newY));

      // Friction.
      circle.accel.scale(.5);
      // Apply accel to vel.
      circle.vel.add(circle.accel.scaleImm(time));
      // Apply vel to position.
      circle.x += circle.vel.x * time;
      circle.y += circle.vel.y * time;

      // Adjust if hitting object.

    });
  }
}
