import { useAppSelector } from "../../store/hooks";
import TableRow from "./TableRow/TableRow";
import './Table.css'
import Footer from "../Footer/Footer";
import TableHeader from "../TableHeader/TableHeader";

export default function Table() {
    const companyList = useAppSelector(state => state.companySlice.companyList);
    
    return (
        <div className="table">
          <TableHeader />
          <div>
          {companyList.map((company, idx) => <TableRow key={idx} company={company} />)}
          </div>
          <Footer />
        </div>
    )
}