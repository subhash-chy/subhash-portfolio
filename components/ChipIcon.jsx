import React from "react";

const ChipIcon = (props) => {
  const {
    link,
    iconPath,
    width = 30,
    height = 30,
    label = "icon",
  } = props;

  return (
    <div className="flex items-center justify-between px-4 py-5 glass glass-edge glass-hover rounded-2xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <svg width={width} height={height} role="img" aria-label={label}>
          <use width={width} height={height} href={iconPath} />
        </svg>
      </a>
    </div>
  );
};

export default ChipIcon;
