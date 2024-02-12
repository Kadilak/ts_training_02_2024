// example.test.ts
import { calculateDistance, Point } from './example';

// Example tests
const pointA: Point = { x: 0, y: 0 };
const pointB: Point = { x: 3, y: 4 };

const distance = calculateDistance(pointA, pointB);

function testIt() {
  test1();
}

function test1() {
  if (distance === 5) {
    console.log('Test passed!');
  } else {
    console.error('Test failed!');
  }
}

export { testIt };
