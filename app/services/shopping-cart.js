import Ember from 'ember';

export default Ember.Service.extend ({
  ordersList:[],
  add(mealItem) {
    this.get('ordersList').pushObject(mealItem);
  },
  totalPrice: Ember.computed("ordersList.[]", function() {
    var totalPrice = 0;
    var ordersList = this.get("ordersList"); //Have to create var again to local
    for (var i = 0; i < ordersList.length; i ++) {
      totalPrice += ordersList[i].get("price");
    }
    return totalPrice.toFixed(2);
  })
});
