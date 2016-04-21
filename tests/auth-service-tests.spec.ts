import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {AuthService} from "app/global/services/auth.service";

describe('Auth Service Tests', () => {
    let username:string;
    let password:string;
    beforeEach(function() {
      this.authService = new AuthService();
    });
    
    // it('Should return access token', () => {
    //   [TestComponentBuilder], (tcb) => {
    //         return tcb.createAsync(QuoteComponent).then((fixture) => {

    //         });
    //     }
    //    // let login = this.authService.login(username, password);
    //    // expect(this.authService.name).toBe('InjectedService');
    //     // expect(login).toBe­Tru­thy();        
    //     // login.toPromise ()
    //     //   .then((token) => {
    //     //     expect(token).toBe­Tru­thy();        
    //     //   });                  
    // });
});
