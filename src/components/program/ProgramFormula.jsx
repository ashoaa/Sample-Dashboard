import "../../../styles/ProgramFormula.scss";
import { useState } from "react";
import ProgramNumsSymbols from "./ProgramNumsSymbols.jsx";
import { useDrop } from "react-dnd";

const nums = Array(9)
  .fill()
  .map((_, index) => ({ value: index + 1, color: "blue", size: "24px" }));
const symbols = [
  { value: ")", color: "yellow", size: "24px" },
  { value: "(", color: "yellow", size: "24px" },
  { value: "+", color: "green", size: "32px" },
  { value: "-", color: "pink", size: "36px" },
];
const ProgramFormula = () => {
  const [formula, setFormula] = useState([]);
  const [formulaString, setFormulaString] = useState("");
  const [{ isOver }, dropRef] = useDrop({
    accept: "num-symbol",
    drop: (item) => {
      setFormula((formula) => [...formula, item]);
      setFormulaString(formulaString + item.value);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div className="formula-container">
      <div className="formula-program-symbol">
        <div className="formula-program-items">
          {nums.map(({ value, color, size }) => (
            <ProgramNumsSymbols
              drop={false}
              key={value}
              value={value}
              color={color}
              size={size}
            />
          ))}
        </div>
        <div className="formula-program-title">
          <p>برنامه</p>
        </div>
      </div>

      <div className="formula-program-symbol">
        <div className="formula-program-items">
          {symbols.map(({ value, color, size }) => (
            <ProgramNumsSymbols
              key={value}
              value={value}
              color={color}
              size={size}
            />
          ))}
        </div>
        <div className="formula-program-title">
          <p>نماد ها</p>
        </div>
      </div>

      <div
        className="formula-dnd"
        ref={dropRef}
        style={isOver ? { backgroundColor: "#b8f7f7" } : null}>
        <div className="formula-dnd-header">
          <img
            onClick={() => {
              setFormula([]);
              setFormulaString("");
            }}
            src="src/images/icons8-delete-100.png"
          />
          <div>
            <p>
              لطفا فرمول مورد نظر را به روش <span dir="rtl">ِDrag & Drop</span>{" "}
              بسازید
            </p>
          </div>
        </div>
        <div className="formula-dnd-nums-symbols">
          {formula.map(({ value, color, size }) => (
            <ProgramNumsSymbols
              drop={true}
              key={value}
              value={value}
              color={color}
              size={size}
            />
          ))}
        </div>
        <div className="formula-dnd-result">
          <div className="formula-string">
            <p>{formulaString.split("").join(" ")}</p>
          </div>
          <img className="equal" src="src/images/icons8-equal-sign-100.png" />
          <img className="fx" src="src/images/icons8-formula-fx-100.png" />
        </div>
      </div>
    </div>
  );
};

export default ProgramFormula;
