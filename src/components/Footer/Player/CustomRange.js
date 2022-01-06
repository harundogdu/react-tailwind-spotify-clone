import React from "react";
import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ step, min, max, value, onChange }) => {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={values => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="h-12 w-full flex group"
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-[5px] w-full rounded-md self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min,
                max
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-3 w-3 rounded-full bg-white ${
            !isDragged ? "opacity-0" : ""
          } group-hover:opacity-100`}
          style={{
            ...props.style,
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)",
          }}
        />
      )}
    />
  );
};

export default CustomRange;
