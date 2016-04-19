import { Injectable } from 'angular2/core';
import { UGSettings } from 'app/ug-settings';

@Injectable()
export class UGSettings {
  constructor () {
    this.UGSettings = new UGSettings();
  }

  getUGSettings () {
    return this.UGSettings;
  }

}