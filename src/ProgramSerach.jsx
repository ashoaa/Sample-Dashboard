import "../styles/ProgramSerach.scss";
import { useDispatch } from "react-redux";
import { programActions } from "./store/store";
const ProgramSerach = () => {
  const dispatch = useDispatch();
  return (
    <div className="input">
      <div className="input-title">
        <p>نام برنامه</p>
      </div>
      <input
        onChange={(event) =>
          dispatch(programActions.programSearch(event.target.value))
        }
        type="textfield"
        className="input-textfield"></input>
    </div>
  );
};

export default ProgramSerach;
