import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(mealItem) {
      this.get('shoppingCart').add(mealItem);
    }
  }
});
