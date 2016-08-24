import DS from 'ember-data';

export default DS.Model.extend ({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  ingredients: DS.attr(),
  spicyScale: DS.attr(),
  popularity: DS.attr()
});
