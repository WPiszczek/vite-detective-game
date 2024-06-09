import { useState, useCallback } from "react";
import { Point } from "react-d3-tree";

export const useCenteredTree = (): [
  Point,
  number,
  (element: HTMLDivElement | null) => void
] => {
  const [translate, setTranslate] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const containerRef = useCallback((containerElem: HTMLDivElement | null) => {
    if (containerElem !== null) {
      const { width } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: 50 });
      setZoom(0.6);
    }
  }, []);
  return [translate, zoom, containerRef];
};
