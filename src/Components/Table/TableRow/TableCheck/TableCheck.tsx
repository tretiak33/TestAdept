import { FC } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { funCheck } from "../../../../store/companySlice";

interface TableCheckProps {
    item: boolean;
    id: string;
}

const TableCheck: FC<TableCheckProps> = ({item, id}) => {
    const dispatch = useAppDispatch()

    return (
        <div>
          <input type='checkbox' checked={item} onChange={() => dispatch(funCheck(id))}/>
        </div>
    )
}

export default TableCheck;