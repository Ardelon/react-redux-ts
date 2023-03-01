import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { nameUpdate, personName } from "./personNameSlice";
import { useEffect, useRef } from "react";

export function PersonName() {
  const inputEl = useRef(null);
  const personNameValue = useAppSelector(personName);
  const dispatch = useAppDispatch();

  return (
    <div className="input-field ">
      <label className="">İsim Soyisim: </label>
      <input
        className="input-style "
        ref={inputEl}
        value={personNameValue}
        type="text"
        onChange={(e) => {
          dispatch(nameUpdate(e.target.value));
        }}
      />
    </div>
  );
}
