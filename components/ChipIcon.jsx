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
    <div className="flex items-center justify-between px-3 py-4 bg-secondary dark:bg-secondary_dark border border-neutral-200 dark:border-neutral-700 rounded-md">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <svg width={width} height={height} role="img" aria-label={label}>
          <use width={width} height={height} href={iconPath} />
        </svg>
      </a>
    </div>
  );
};

export default ChipIcon;
