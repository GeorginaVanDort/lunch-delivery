import Ember from 'ember';

export default Ember.Component.extend ({
  priceAsc: ['price:asc'],
  sortedMealsPriceAsc: Ember.computed.sort('meal', 'priceAsc')
});
