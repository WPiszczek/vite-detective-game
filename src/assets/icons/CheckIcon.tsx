import { FC } from "react";
import { IconProps } from "../../features/common/types";

const CheckIcon: FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      fill={color || "white"}
      width={width || 30}
      height={height || 30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

export default CheckIcon;
