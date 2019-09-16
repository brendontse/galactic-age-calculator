const mercuryValue = 0.24;
const venusValue = 0.62;
const marsValue = 1.88;
const jupiterValue = 11.86;


export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getEarthAge() {
    return this.age;
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
    let mercuryYears = Math.floor(this.age / mercuryValue) //100
    let mercuryExpectancy = Math.floor(this.lifeExpectancy / mercuryValue) //329
    return mercuryExpectancy - mercuryYears;
  }

  getRemainingVenusYears() {
    let venusYears = Math.floor(this.age / venusValue) //38
    let venusExpectancy = Math.floor(this.lifeExpectancy / venusValue) //127
    return venusExpectancy - venusYears;
  }

  getRemainingMarsYears() {
    let marsYears = Math.floor(this.age / marsValue)  //12
    let marsExpectancy = Math.floor(this.lifeExpectancy / marsValue) //42
    return marsExpectancy - marsYears;
  }

  getRemainingJupiterYears() {
    let jupiterYears = Math.floor(this.age / jupiterValue) //2
    let jupiterExpectancy = Math.floor(this.lifeExpectancy / jupiterValue) //6
    return jupiterExpectancy - jupiterYears;
  }

}
