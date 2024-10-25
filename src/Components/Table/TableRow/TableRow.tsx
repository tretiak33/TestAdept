import { FC } from "react";
import TableCell from "./TableCell/TableCell";
import TableCheck from "./TableCheck/TableCheck";
import '../TableRow/TableRow.css'

interface CompanyProps {
    company: {
        id: string;
        name: string;
        address: string;
        bright: boolean;
    }
    
}

const TableRow: FC<CompanyProps> = ({company}) => {
    const {id, name, address, bright} = company;

    return (
        <div className={`${bright ? "table-row active" : "table-row"}`}>
            <TableCheck item={bright} id={id} />
            <TableCell item={name} designation='name' id={id} />
            <TableCell item={address} designation='address' id={id} />
        </div>
    )
}

export default TableRow;