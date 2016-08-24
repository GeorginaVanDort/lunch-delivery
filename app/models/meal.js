import DS from 'ember-data';

export default DS.Model.extend ({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr("number"), //"number" assigns type to input
  ingredients: DS.attr(),
  spicyScale: DS.attr(),
  imgURL: DS.attr(),
  popularity: DS.attr()
});
