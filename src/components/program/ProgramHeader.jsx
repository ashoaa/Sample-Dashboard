/* eslint-disable react/prop-types */
import "../../../styles/ProgramHeader.scss";
const ProgramHeader = ({ title }) => {
  return (
    <div className="program-header">
      <div className="program-header-line"></div>
      <div className="program-header-text">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProgramHeader;
