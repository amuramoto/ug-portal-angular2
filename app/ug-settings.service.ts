export class UGSettings {
  constructor () {
    let org = 'amuramoto';
    let app = 'sandbox';
    let baseurl = 'http://api.usergrid.com';
    this.apiUrl = `${baseurl}/${org}/${app}`;
  }

}