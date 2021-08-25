import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // console.log(Point[0]);
      return  ((Point.x-center.x)**2 + (Point.y-center.y)**2) <= radius**2;   
    }
  }
}

