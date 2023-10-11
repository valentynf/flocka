function UnreadMessagesIcon() {
  return (
    <svg
      fill="#c4c4c7"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {
        <>
          <path d="M17,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
          <path d="M21,19H3a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"></path>
          <path d="M12,7H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"></path>
        </>
      }
    </svg>
  );
}

export default UnreadMessagesIcon;
