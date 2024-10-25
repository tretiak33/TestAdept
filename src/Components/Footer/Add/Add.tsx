import { addCompany } from "../../../store/companySlice";
import { useAppDispatch } from "../../../store/hooks";
import nextId from "react-id-generator";

export default function Add() {
    const dispatsh = useAppDispatch();
    
    function add() {
        const name: string | null = prompt('Введите название компании');
        const address: string | null = prompt('Введите адрес компании');
        if (name?.trim().length !== 0 && address?.trim().length !== 0 && name && address) {
            dispatsh(addCompany({id: nextId(), name, address}));
        } else {
          alert('Данные введены неверно');
        }
      }

    return (
        <button onClick={add} type="button">Add</button>
    )
}