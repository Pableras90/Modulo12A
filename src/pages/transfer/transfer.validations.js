import { Validators,createFormValidation } from "@lemoncode/fonk";
import { isNumber } from "@lemoncode/fonk-is-number-validator";
import { iban } from "@lemoncode/fonk-iban-validator";
import { rangeNumber } from "@lemoncode/fonk-range-number-validator";


const validationSchema={
    field:{
        iban: [Validators.required,iban.validator],
        name:[Validators.required],
        amount:[isNumber.validator],
        concept:[Validators.required],
        notes:[Validators.required],
        day:[
            {
              validator: rangeNumber.validator,
              customArgs: {
                strictTypes: true,
                min: {
                  value: 1,
                  inclusive: false,
                },
                max: {
                  value: 31,
                  inclusive: false,
                },
              },
            },
          ],
        month:[
            {
              validator: rangeNumber.validator,
              customArgs: {
                strictTypes: true,
                min: {
                  value: 1,
                  inclusive: false,
                },
                max: {
                  value: 12,
                  inclusive: false,
                },
              },
            },
          ],
        year:[
            {
              validator: rangeNumber.validator,
              customArgs: {
                strictTypes: true,
                min: {
                  value: 1900,
                  inclusive: false,
                },
                max: {
                  value: 2030,
                  inclusive: false,
                },
              },
            },
          ],
        email:[Validators.required,Validators.email],
    }
}


export const transferValidation = createFormValidation(validationSchema);