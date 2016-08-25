import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll("meal");
  },
  priceAsc: ['price:asc'],
  sortedMealsPriceAsc: Ember.computed.sort('meal', 'priceAsc')
});
