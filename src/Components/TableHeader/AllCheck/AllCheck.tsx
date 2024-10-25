import { useState } from "react";
import { checkAll } from "../../../store/companySlice";
import { useAppDispatch } from "../../../store/hooks"

export default function AllCheck() {
    const dispatch = useAppDispatch();
    const [state, setState] = useState(false);

    const change = () => {
        setState(!state);
        dispatch(checkAll(!state));
    }

    return (
        <label>
            <input type="checkbox" checked={state} onChange={change}/>
            Выделить всё
        </label>
    )
}