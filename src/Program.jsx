import "../styles/Program.scss";
import ProgramSerach from "./ProgramSerach";
import ProgramHeader from "./ProgramHeader";
import ProgramTip from "./ProgramTip";
import ProgramFrame from "./ProgramFrame";
import ProgramFormula from "./ProgramFormula";
import Line from "./Line";
import ProgramSave from "./ProgramSave";
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
