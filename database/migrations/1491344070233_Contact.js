'use strict';

const Schema = use('Schema');

class ContactSchema extends Schema {

  up() {
    this.create('contacts', (table) => {
      table.increments();
      table.string,('first_name');
      table.string,('last_name');
      table.date('birthday');
      table.timestamps();
    });
  }

  down() {
    this.drop('contacts');
  }

}

module.exports = ContactSchema;
