import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Company {
    id: string;
    name: string;
    address: string;
    bright: boolean;
}

interface CompanyState {
    companyList: Company[]
}

type ChangeProps = {
    value: string;
    id: string;
    designation: string;
}

type AddCompanyProps = {
    id: string;
    name: string;
    address: string;
}

const initialState: CompanyState = {
    companyList: []
}

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
        addCompany(state, action: PayloadAction<AddCompanyProps>)  {
            const {id, name, address} = action.payload;
            state.companyList.push({
                id,
                name,
                address,
                bright: false
            })
        },
        deleteCompany(state, action: PayloadAction<string>) {

        },
        checkAll(state, action: PayloadAction<boolean>) {
            state.companyList.forEach((elem) => {
                action.payload ? elem.bright = true : elem.bright = false;
            });
        },
        funCheck(state, action: PayloadAction<string>) {
            const elem: Company | undefined = state.companyList.find((elem) => elem.id === action.payload);
            if(elem) {
                elem.bright = !elem.bright;
            }
        },
        funChange(state, action: PayloadAction<ChangeProps>) {
            const {value, id, designation} = action.payload;
            const elem: Company | undefined = state.companyList.find((elem) => elem.id === id);
            if(elem) {
                designation === 'name' ? elem.name = value  : elem.address = value;
            }
        }
  },
})

export const { addCompany, deleteCompany, funCheck, funChange, checkAll} = companySlice.actions
export default companySlice.reducer