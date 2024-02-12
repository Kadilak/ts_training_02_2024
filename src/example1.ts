// example.ts
interface Point {
    x: number;
    y: number;
  }
  
  function calculateDistance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  export { Point, calculateDistance };
  