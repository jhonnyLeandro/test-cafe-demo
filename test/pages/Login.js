import { Selector, t } from 'testcafe';

class LoginPage {
    constructor(){
        this.userNameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async loginToApplication(userName, password){
        await t.typeText(this.userNameInput, userName)
               .typeText(this.passwordInput, password)
               .click(this.loginButton);
    }

}

export default new LoginPage();