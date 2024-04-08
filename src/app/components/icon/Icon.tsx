import icons from "./icons"

export default function Icon({icon, className, color}: {icon: string, color?: string, className?: string}) {
    return (
      <svg
        className={className}
        viewBox={icons[icon].viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
          {icons[icon].paths.map((path, index) => (
              <path
                key={index}
                d={path.data}
                fill={path?.fill || 'none'}
                stroke={color}
                strokeWidth={path.strokeWidth}
                strokeLinecap={path.strokeLinecap}
                strokeLinejoin={path.strokeLinejoin}
              />
          ))}
      </svg>
    )
}