import { Figure } from './Figure';

export class Triangle extends Figure {
  private a: number;
  private b: number;
  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    super(color);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}
