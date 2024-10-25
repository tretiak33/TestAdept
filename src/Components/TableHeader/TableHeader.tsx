import AllCheck from "./AllCheck/AllCheck"
import './TableHeader.css'

export default function TableHeader() {
    return(
        <div className="table-header">
            <AllCheck />
            <div>Компании</div>
        </div>
    )
}