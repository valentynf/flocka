type NewUserIconProps = {
  color: string;
};

function NewUserIcon({ color }: NewUserIconProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 16.489 18.938 L 16.489 17.306 C 16.489 15.503 15.027 14.041 13.224 14.041 L 6.694 14.041 C 4.891 14.041 3.429 15.503 3.429 17.306 L 3.429 18.938"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
      <circle
        cx="9.959"
        cy="8.327"
        fill="none"
        r="3.265"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
      <line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        x1="15.674"
        x2="20.57"
        y1="11.592"
        y2="11.592"
      />
      <line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        x1="18.122"
        x2="18.122"
        y1="9.143"
        y2="14.041"
      />
    </svg>
  );
}

export default NewUserIcon;
