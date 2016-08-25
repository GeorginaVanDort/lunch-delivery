import Ember from 'ember';

export default Ember.Component.extend ({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(mealItem) {
      this.get('shoppingCart').addItem(mealItem);
      var popularityCount = mealItem.get("popularity");
      popularityCount ++;
      mealItem.set("popularity", popularityCount);
      mealItem.save();
    }
  }
});
