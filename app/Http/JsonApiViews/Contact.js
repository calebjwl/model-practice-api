const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Contact extends JsonApiView {
  get attributes() {
    return ['first_name', 'last_name'];
  }

}

module.exports = Contact;
