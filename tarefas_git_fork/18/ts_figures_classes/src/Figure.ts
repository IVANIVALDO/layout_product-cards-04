export abstract class Figure {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;
}
