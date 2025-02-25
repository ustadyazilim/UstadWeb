interface GeometricShapeProps {
  className?: string;
  src: string;
  rotation?: number;
  blur?: string;
}

const GeometricShape = ({
  className,
  src,
  rotation = 0,
}: GeometricShapeProps) => {
  return (
    <img
      src={src}
      alt="Geometric Shape"
      className={className}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...(className?.includes('background__shapes--3')
          ? { filter: 'none' }
          : {}),
      }}
    />
  );
};

export default GeometricShape;
