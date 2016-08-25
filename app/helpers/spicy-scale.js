import Ember from 'ember';

export function spicyScale(params/*, hash*/) {
  var mealSpicyScale = params[0].get("spicyScale");

  if(mealSpicyScale === "1") {
    return "(>_<)";
  } else if(mealSpicyScale === "2") {
    return "(>_<)(>_<)";
  } else if(mealSpicyScale === "3") {
    return "(>_<)(>_<)(>_<)";
  } else if(mealSpicyScale === "4") {
    return "(>_<)(>_<)(>_<)(>_<)";
  } else {
    return "(>_<)(>_<)(>_<)(>_<)(>_<)";
  }
}

export default Ember.Helper.helper(spicyScale);
