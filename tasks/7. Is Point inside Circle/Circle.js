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
      return  ((Point.x-center.x)**2 + (Point.y-center.y)**2) <= radius**2;   
    }
  }
}

