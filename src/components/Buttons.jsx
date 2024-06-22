import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {sendRequestOnMethod, sendRequestOnMethodWithAuthorization} from "../modules/apiButtons";

const Buttons = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <button className="btn btn-xs btn-success" onClick={() => dispatch(sendRequestOnMethod())}>
        Вызвать метод, не закрытый за авторизацией
      </button>
      <br/>
      <button className="btn btn-xs btn-warning" onClick={() => dispatch(sendRequestOnMethodWithAuthorization())}>
        Вызвать метод, закрытый за авторизацией
      </button>
    </div>
);
}

export default Buttons
