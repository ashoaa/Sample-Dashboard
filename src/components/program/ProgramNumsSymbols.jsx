/* eslint-disable react/prop-types */
import "../../../styles/ProgramNumsSymbols.scss";
import { useDrag } from "react-dnd";
const ProgramNumsSymbols = ({ value, color, size, drop }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "num-symbol",
    item: { value, color, size },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="nums-symbols">
      {drop ? (
        <div className={color} key={value}>
          <p style={{ fontSize: size }}>{value}</p>
        </div>
      ) : (
        <div className={color} key={value} ref={dragRef}>
          <p style={{ fontSize: size }}>{value}</p>
        </div>
      )}
    </div>
  );
};

export default ProgramNumsSymbols;
