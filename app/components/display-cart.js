import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    deleteFromCart(mealItem) {
      this.get("shoppingCart").removeItem(mealItem);
      var popularityCount = mealItem.get("popularity");
      popularityCount --;
      mealItem.set("popularity", popularityCount);
      mealItem.save();
    }
  }
});
