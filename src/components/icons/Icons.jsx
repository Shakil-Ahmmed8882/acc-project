

const ArrowIconRight = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1">
      <circle id="Ellipse 4" cx="20" cy="20" r="20" fill={fillCircle} />
      <path
        id="Vector"
        d="M22.6136 19.9433L17.1591 14.4887C16.657 13.9866 16.657 13.1726 17.1591 12.6706C17.6612 12.1685 18.4752 12.1685 18.9772 12.6706L26.25 19.9433L18.9773 27.2159C18.4752 27.718 17.6612 27.718 17.1591 27.2159C16.657 26.7138 16.657 25.8998 17.1591 25.3977L22.6136 19.9433Z"
        fill={fillPath}
      />
    </g>
  </svg>
);




const ArrowIconLeft = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="20"
      transform="rotate(-180 20 20)"
      fill="#FAFAFA"
    />
    <path
      d="M17.3864 20.0567L22.8409 25.5113C23.343 26.0134 23.343 26.8274 22.8409 27.3294C22.3388 27.8315 21.5248 27.8315 21.0228 27.3294L13.75 20.0567L21.0227 12.7841C21.5248 12.282 22.3388 12.282 22.8409 12.7841C23.343 13.2862 23.343 14.1002 22.8409 14.6023L17.3864 20.0567Z"
      fill="#1C1C1C"
    />
  </svg>
);
const ButtonRightArrow = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className="hidden group-hover:block  top-0 left-0 transition-all duration-1000"
  >
    <path
      d="M15.6716 7.00005L11.0147 2.34314C10.6242 1.95262 10.6242 1.31946 11.0147 0.928941C11.4052 0.538417 12.0384 0.538416 12.4289 0.92894L19.5 8.00005L12.4289 15.0711C12.0384 15.4616 11.4052 15.4616 11.0147 15.0711C10.6242 14.6805 10.6242 14.0474 11.0147 13.6569L15.6716 9.00005H1.5C0.947715 9.00005 0.5 8.55234 0.5 8.00005C0.5 7.44777 0.947715 7.00005 1.5 7.00005H15.6716Z"
      fill="url(#paint0_linear_17_451)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_451"
        x1="10"
        y1="-9.82076"
        x2="10"
        y2="15.3639"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#AC7C00" />
      </linearGradient>
    </defs>
  </svg>
);


export {ArrowIconRight,ArrowIconLeft,ButtonRightArrow}


