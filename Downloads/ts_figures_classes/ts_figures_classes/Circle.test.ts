import { Circle } from './Circle';

test('Circle area calculation', () => {
  const circle = new Circle(10);
  expect(circle.getArea()).toBeCloseTo(314.159, 3);
});
