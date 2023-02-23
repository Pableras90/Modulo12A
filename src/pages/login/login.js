import { onUpdateField, onSubmitForm } from '../../common/helpers';
import { isValidLogin } from './login.api';
let login = {
    user: '',
    password: '',
};

onUpdateField("user", (event) => {
    const value = event.target.value;
    login = {
        ...login,
        user: value
    }
})

onUpdateField("password", (event) => {
    const value = event.target.value;
    login = {
        ...login,
        password: value
    }
});

onSubmitForm("login-button", () => {
    isValidLogin(login).then(isValid => {
        console.log({ isValid });
    });
});

