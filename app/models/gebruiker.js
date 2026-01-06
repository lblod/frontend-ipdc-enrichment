import Model, { attr, hasMany } from '@ember-data/model';

export default class GebruikerModel extends Model {
  @attr voornaam;
  @attr achternaam;
  @attr rijksregisterNummer;

  @hasMany('account', { async: false, inverse: 'gebruiker' }) account;

  @hasMany('organisation', {
    async: false,
    inverse: null,
    polymorphic: true,
  })
  organisations;

  get group() {
    return this.organisations.at(0);
  }

  // used for mock login
  get fullName() {
    return `${this.voornaam} ${this.achternaam}`.trim();
  }
}
