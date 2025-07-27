import { Figure } from './Figure';

export class Triangle implements Figure {
  color: string;
  shape: string;
  base: number;
  height: number;

  constructor(color: string, base: number, height: number) {
    if (base <= 0 || height <= 0) {
      throw new Error('Base and height must be greater than 0');
    }
    this.color = color;
    this.shape = 'triangle';
    this.base = base;
    this.height = height;
  }

  getArea(): number {
    return parseFloat(((this.base * this.height) / 2).toFixed(2));
  }
}
