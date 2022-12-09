import { FC } from "react";

export const EmptyClock: FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      right: "24%",
      top: 10,
    }}
  >
    <circle cx="11" cy="11" r="10" stroke="#FF4E52" stroke-width="1.5" />
    <path
      d="M11 7V10.7324C11 10.8996 11.0836 11.0557 11.2226 11.1484L14 13"
      stroke="#FF4E52"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
