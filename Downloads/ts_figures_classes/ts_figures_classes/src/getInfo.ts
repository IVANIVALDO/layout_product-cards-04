import { Figure } from './Figure';

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaStr = area % 1 === 0 ? area.toFixed(0) : area.toFixed(2);
  return `This is a ${figure.color} ${figure.shape} with area ${areaStr}`;
}
