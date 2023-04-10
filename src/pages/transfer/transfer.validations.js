import { Validators,createFormValidation } from "@lemoncode/fonk";
import { isNumber } from "@lemoncode/fonk-is-number-validator";
import { iban } from "@lemoncode/fonk-iban-validator";


const validationSchema={
    field:{
        accountId:[Validators.required],
        iban: [Validators.required,iban.validator],
        name:[Validators.required],
        amount:[Validators.required,isNumber.validator],
        concept:[Validators.required],
        notes:[Validators.required],
        day:[Validators.required],
        month:[Validators.required],
        year:[Validators.required],
        email:[Validators.required,Validators.email],
    }
}


export const transferValidation = createFormValidation(validationSchema);