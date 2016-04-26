export class UGSettings {
  org: string;
  app: string;
  baseUrl: string;
  apiUrl: string;
  maxTokenAge: number;
  constructor () {
    this.org = 'amuramoto';
    this.app = 'sandbox';
    this.baseUrl = 'http://api.usergrid.com';
    this.apiUrl = `${this.baseUrl}/${this.org}/${this.app}`;

    //default max token age - 3 days
    this.maxTokenAge = 259200;
  }
}