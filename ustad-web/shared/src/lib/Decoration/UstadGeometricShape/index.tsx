interface GeometricShapeProps {
  className?: string;
  color?: string;
}
const GeometricShape = ({
  className,
  color = '#497F18',
}: GeometricShapeProps) => {
  return (
    <svg
      width="322"
      height="325"
      viewBox="0 0 322 325"
      fill="none"
      className={className}
    >
      <path d="M4.47 94.72h223.82v225.54H4.47z" fill={color} />
      <path d="M4.48 4.52h313.35v315.75H4.48z" fill="#FF9914" />
      <path d="M0 0h322.3v324.77H0z" fill="#231B3B" />
    </svg>
  );
};

export default GeometricShape;
