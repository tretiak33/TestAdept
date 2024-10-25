import { FC } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { funChange } from "../../../../store/companySlice";

interface TableCellProps {
    item: string;
    id: string;
    designation: string;
}

const TableCell: FC<TableCellProps> = ({item, id, designation }) => {
    const dispatch = useAppDispatch();

    const debounce = (fn: (...args: any[]) => void, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
      };

    function change(e: any): void {
        dispatch(funChange({value: e.target.value, id, designation}))
    }

    return (
        <div>
          <input type='text' defaultValue={item} onChange={debounce(change, 500)}/>
        </div>
    )
}

export default TableCell;