import { Circle } from './Circle';

describe('Circle area calculation', () => {
  test('should correctly calculate area', () => {
    const circle = new Circle('blue', 10);
    expect(circle.getArea()).toBeCloseTo(Math.PI * 100);
  });
});
