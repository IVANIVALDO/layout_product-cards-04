// src/figuresClasses.ts

export abstract class Figure {
  public shape: string;
  protected color: string;

  constructor(color: string) {
    this.color = color;
    this.shape = '';
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;
}

export class Triangle extends Figure {
  private a: number;
  private b: number;
  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    super(color);
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be positive');
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2);
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}

export class Circle extends Figure {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;  // arredonda para baixo (trunca)
  }

  getPerimeter(): number {
    const perimeter = 2 * Math.PI * this.radius;
    return Math.floor(perimeter * 100) / 100; // arredonda para baixo (trunca)
  }
}

export class Rectangle extends Figure {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be positive');
    }

    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure['color']} ${figure.shape} - ${figure.getArea()}`;
}
