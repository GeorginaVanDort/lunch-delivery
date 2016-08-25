import Ember from 'ember';

export default Ember.Service.extend ({
  ordersList:[],
  popularityCount: 0,
  addItem(mealItem) {
    this.get('ordersList').pushObject(mealItem);
    var popularityCount;
    popularityCount += 1;
    // this.set('id', this.get('id')+1);
    // var mealItemInCart = {id: this.get('id'), item: mealItem};
    // this.get('ordersList').pushObject(mealItemInCart);
  },
  removeItem(mealItem) {
    // var list = [];
    // this.get('ordersList').forEach(function(order) {
    //   list.push(order);
    // });
    var ordersListDuplicate = this.get('ordersList').slice();
    var indexToRemove = ordersListDuplicate.indexOf(mealItem);
    ordersListDuplicate.splice(indexToRemove, 1);
    this.set('ordersList', ordersListDuplicate);
    // var popularityCount;
    // popularityCount -= 1;
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
