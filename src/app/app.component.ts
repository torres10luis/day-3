import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';

class Point {
  x: number; y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  add(newPoint: Point) {
    return newPoint = new Point(newPoint.x + this.x, newPoint.y + this.y);
  }
}

class Point3D extends Point {
  x: number;
  y: number;
  z: number;
    constructor (x: number, y: number, z: number ) {
      super(x, y);
      this.x = x;
      this.y = y;
      this.z = z;
    }

    add(newPoint3D: Point3D) {
      return newPoint3D = new Point3D(newPoint3D.x + this.x, newPoint3D.y + this.y, newPoint3D.z + this.z);
    }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  ngOnInit() {
    this.classTesting();
    this.twoClassTesting();
  }

  classTesting() {
    const p1 = new Point(1, 2);
    const p2 = new Point(3, 4);
    const p3 = p1.add(p2);
    console.log(p3);
  }
  twoClassTesting() {
    const p3D1 = new Point3D(5, 6, 7);
    const p3D2 = new Point3D(8, 9, 0);
    const p3D3 = p3D1.add(p3D2);
    console.log(p3D3);

  }

}
