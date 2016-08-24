import Ember from 'ember';

export default Ember.Component.extend ({
  addNewMealForm: false,
  actions: {
    showNewMealForm() {
      this.set("addNewMealForm", true);
    },
    saveMeal() {
      var params = {
        name: this.get("name"),
        description: this.get("description"),
        price: this.get("price"),
        ingredients: this.get("ingredients"),
        spicyScale: this.get("spicyScale"),
        popularity: 0
      };
      this.set("addNewMealForm", false);
      this.sendAction("saveMeal", params);
    }
  }
});
