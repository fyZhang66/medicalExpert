import React from "react";
import Slider from "@mui/material/Slider";
import styles from "./MatricCard.module.scss";
import Box from "@mui/material/Box";

const MatricCard = ({
  marks = [0, 0, 0],
  matricName = "",
  formatMark = (txt) => txt,
}) => {
  const calculateDisplayRange = (marks) => {
    const [value, min, max] = marks;
    
    const actualMin = Math.min(value, min);
    const actualMax = Math.max(value, max);
    
    const range = actualMax - actualMin;
    const buffer = range * 0.1;
    const displayMin = actualMin - buffer;
    const displayMax = actualMax + buffer;
    const displayRange = displayMax - displayMin;
    
    return { displayMin, displayRange };
  };
  
  const calculateRelativePosition = (value, displayMin, displayRange) => {
    return ((value - displayMin) / displayRange) * 100;
  };

  const formatMarks = () => {
    const [value, min, max] = marks;
    const { displayMin, displayRange } = calculateDisplayRange(marks);

    const minPos = calculateRelativePosition(min, displayMin, displayRange);
    const valuePos = calculateRelativePosition(value, displayMin, displayRange);
    const maxPos = calculateRelativePosition(max, displayMin, displayRange);

    return [
      {
        value: minPos,
        label: formatMark(min),
      },
      {
        value: valuePos,
        label: formatMark(value),
      },
      {
        value: maxPos,
        label: formatMark(max),
      },
    ];
  };

  const getDefaultValue = () => {
    const [value] = marks;
    const { displayMin, displayRange } = calculateDisplayRange(marks);
    return calculateRelativePosition(value, displayMin, displayRange);
  };

  return (
    <div className={styles.matricBox}>
      <div className={styles.info}>
        <span className={styles.name}>{matricName}</span>
      </div>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={getDefaultValue()}
          getAriaValueText={formatMark}
          step={1}
          min={0}
          max={100}
          disabled={true} // 禁用拖动功能，仅作为显示用
          valueLabelDisplay="auto"
          marks={formatMarks()}
        />
      </Box>
    </div>
  );
};

export default MatricCard;