import Ember from 'ember';

export function spicyScale(params/*, hash*/) {
  var mealSpicyScale = params[0].get("spicyScale");
  var spicyIcon = "<span class='glyphicon glyphicon-fire'></span>";

  return Ember.String.htmlSafe(spicyIcon.repeat(mealSpicyScale));
}

export default Ember.Helper.helper(spicyScale);
