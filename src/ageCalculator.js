const mercuryValue = 0.24;
const venusValue = 0.62;
const marsValue = 1.88;
const jupiterValue = 11.86;

export class Person {

  constructor (age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getEarthAge() {
    return Math.floor(this.age);
  }

  getMercuryAge() {
    return Math.floor(this.age / mercuryValue);
  }

  getVenusAge() {
    return Math.floor(this.age / venusValue);
  }

  getMarsAge() {
    return Math.floor(this.age / marsValue);
  }

  getJupiterAge() {
    return Math.floor(this.age / jupiterValue);
  }

  getRemainingEarthYears() {
    return Math.floor(this.lifeExpectancy - this.age)
  }

  getRemainingMercuryYears() {
    return Math.abs(Math.floor(this.lifeExpectancy / mercuryValue) - (this.age / mercuryValue));
  }

  getRemainingVenusYears() {
    return Math.abs(Math.floor(this.lifeExpectancy / venusValue) - (this.age / venusValue));
  }

  getRemainingMarsYears() {
    return Math.abs(Math.floor(this.lifeExpectancy / marsValue) - (this.age / marsValue));
  }

  getRemainingJupiterYears() {
    return Math.abs(Math.floor(this.lifeExpectancy / jupiterValue) - (this.age / jupiterValue));
  }
  
}
