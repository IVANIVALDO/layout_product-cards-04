import { Figure } from './Figure';

export class Circle implements Figure {
  color: string;
  shape: string;
  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) throw new Error('Radius must be greater than 0');
    this.color = color;
    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return parseFloat(area.toFixed(2));
  }
}
