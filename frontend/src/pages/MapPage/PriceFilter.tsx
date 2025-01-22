import React, { useState }  from "react";
import { Range, getTrackBackground } from "react-range";

export type PriceFilterProps = {
  min: number;
  max: number;
  initialRange: number[];
  onRangeChange: (newRange: number[]) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ 
  min,
  max,
  initialRange,
  onRangeChange
}) => {
  const [selectedRange, setSelectedRange] = useState<number[]>(initialRange);

  const handleRangeChange = (values: number[]) => {
    setSelectedRange(values);
    onRangeChange(values);
  };

  return (
    <div>
      <output style={{ marginTop: "10px" }}>
        Цена: {selectedRange[0]} - {selectedRange[1]}
      </output>
      <Range
        label="Select your value"
        step={100}
        min={min}
        max={max}
        values={selectedRange}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values: selectedRange,
                colors: ['#ccc', "#333", '#ccc'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "10px",
            width: "10px",
            backgroundColor: "#333",
          }}
        />
      )}
    />
</div>
  );
};

export default PriceFilter;