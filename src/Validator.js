import Numberschema from "./NumberSchema.js";
import ArraySchema from "./ArraySchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
  number() {
    return new Numberschema();
  }
  
  array() {
    return new ArraySchema();
  }
  
  object() {
    return new ObjectSchema();
  }
}