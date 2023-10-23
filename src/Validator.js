import Numberschema from "./NumberSchema.js";
import ArraySchema from "./ArraySchema.js";

export default class Validator {
  number() {
    return new Numberschema();
  }

  array() {
    return new ArraySchema();
  }
}