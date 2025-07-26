import { Figure } from './Figure';

export class Circle extends Figure {
  constructor(color: string, private radius: number) {
    super(color);
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
