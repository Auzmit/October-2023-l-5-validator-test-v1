export default class Numberschema {
  // validators = [(value) => isNaN(value)];
  validators = [(value) => typeof value === 'number'];

  // number(value) {
  //   this.validators.push((value) => !isNaN(value));
  //   return this;
  // };

  even() {
    this.validators.push((value) => value % 2 === 0);
    return this;
  };
  
  odd() {
    this.validators.push((value) => value % 2 !== 0);
    return this;
  };

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
}