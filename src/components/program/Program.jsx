import "../../../styles/Program.scss";
import ProgramSerach from "./ProgramSerach.jsx";
import ProgramHeader from "./ProgramHeader.jsx";
import ProgramTip from "./ProgramTip.jsx";
import ProgramFrame from "./ProgramFrame.jsx";
import ProgramFormula from "./ProgramFormula.jsx";
import Line from "./Line.jsx";
import ProgramSave from "./ProgramSave.jsx";
const Program = () => {
  return (
    <div className="program">
      <ProgramSerach />
      <ProgramHeader title="شرایط برنامه ریزی" />
      <ProgramFrame />
      <ProgramHeader title="فرمول نویسی ریاضی" />
      <ProgramTip />
      <ProgramFormula />
      <Line />
      <ProgramSave />
    </div>
  );
};

export default Program;
