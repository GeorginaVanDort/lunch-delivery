import Ember from 'ember';

export default Ember.Service.extend ({
  ordersList:[],
  addItem(mealItem) {
    this.get('ordersList').pushObject(mealItem);
  },
  removeItem(mealItem) {
    var ordersListDuplicate = this.get('ordersList').slice();
    var indexToRemove = ordersListDuplicate.indexOf(mealItem);
    ordersListDuplicate.splice(indexToRemove, 1);
    this.set('ordersList', ordersListDuplicate);
  },
  totalPrice: Ember.computed("ordersList.[]", function() {
    var totalPrice = 0;
    var ordersList = this.get("ordersList"); //Have to create var again to local & to reference inside for loop
    for (var i = 0; i < ordersList.length; i ++) {
      totalPrice += ordersList[i].get("price");
    }
    return totalPrice.toFixed(2);
  })
});
