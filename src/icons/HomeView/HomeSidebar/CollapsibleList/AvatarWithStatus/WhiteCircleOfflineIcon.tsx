type WhiteCircleOfflineButtonPropTypes = {
  backgroundColor: string;
};

function WhiteCircleOfflineButton({
  backgroundColor,
}: WhiteCircleOfflineButtonPropTypes) {
  return (
    <svg
      height="10px"
      width="10px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke={`${backgroundColor}`}
        strokeWidth="3"
        fill="none"
      />

      <circle
        cx="8"
        cy="8"
        r="4"
        stroke="#c4c4c7"
        strokeWidth="2"
        fill={`${backgroundColor}`}
      />
    </svg>
  );
}

export default WhiteCircleOfflineButton;
