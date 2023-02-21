import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { nameUpdate, personName } from "./personNameSlice";
import { useEffect, useRef } from "react";

export function PersonName() {
	const inputEl = useRef(null);
	const personNameValue = useAppSelector(personName);
	const dispatch = useAppDispatch();

	return (
		<div>
			<label>İsim Soyisim</label>
			<input
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
