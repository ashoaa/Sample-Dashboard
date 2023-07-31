import "../../../styles/ProgramFrame.scss";
import { useSelector, useDispatch } from "react-redux";
import { programActions } from "../../store/store";
import { useRef } from "react";

const ProgramFrame = () => {
  const addProgramRef = useRef();
  let programs = useSelector((state) => state.programs.programs);
  const search = useSelector((state) => state.programs.search);
  if (search) {
    programs = programs.filter((program) =>
      program.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  const dispatch = useDispatch();
  return (
    <div className="program-container">
      <div className="program-list">
        {programs.map((program, index) => (
          <div key={program.id} className="program-item-container ">
            <div className="program-item-main">
              <button
                onClick={() =>
                  dispatch(programActions.deleteProgram(program.id))
                }
                className="program-item-delete">
                حذف برنامه
              </button>
              <div className="program-item-info">
                <p>{program.name}</p>
                <button
                  onClick={() =>
                    dispatch(programActions.trigActivity(program.id))
                  }
                  className={program.active ? "active" : "deactive"}>
                  {program.active ? "Active" : "DeActive"}
                </button>
              </div>
            </div>
            <div className="program-item-num">
              <div>
                <p>{index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="program-add">
        <div className="program-add-title">
          <p>برنامه جدید</p>
        </div>
        <div className="program-add-input">
          <button
            onClick={() => {
              dispatch(programActions.addProgram(addProgramRef.current.value));
              addProgramRef.current.value = "";
            }}>
            افزودن برنامه
          </button>
          <input ref={addProgramRef} type="text" />
        </div>
      </div>
    </div>
  );
};

export default ProgramFrame;
