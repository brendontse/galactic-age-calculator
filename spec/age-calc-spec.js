import { Person } from '../src/ageCalculator'

describe('AgeCalculator', function() {

  let person;
  let testEarthAge = 24;

  it('should test if Earth age is what the user inputted', function() {
    expect(person.getEarthAge()).toEqual(testEarthAge);
  });

  it('should test if Mercury age is accurate', function() {
    let testAge = Math.floor(testEarthAge / 0.24);
    expect(person.getMercuryAge()).toEqual(testAge);
  });

  it('should test if Venus age is accurate', function() {
    let testAge = Math.floor(testEarthAge / 0.62);
    expect(person.getVenusAge()).toEqual(testAge);
  });

  it('should test if Mars age is accurate', function() {
    let testAge = Math.floor(testEarthAge / 1.88);
    expect(person.getMarsAge()).toEqual(testAge);
  });

  it('should test if Jupiter age is accurate', function() {
    let testAge = Math.floor(testEarthAge / 11.86);
    expect(person.getJupiterAge()).toEqual(testAge);
  });

describe('LifeExpectancy', function(){
  let person;
  let testEarthAge = 24;
  let testAmericanLifeExpectancy = 79;

  it('should test if your remaining Earth years are accurate', function() {
    expect(person.getRemainingEarthYears()).toEqual(testAmericanLifeExpectancy - testEarthAge);
  });

  it('should test if your remaining Mercury years are accurate', function() {
    let testMercuryAge = (testEarthAge / 0.24);
    let testMercuryLifeExpectancy = (testAmericanLifeExpectancy / 0.24);
    expect(person.getRemainingMercuryYears()).toEqual(Math.floor(testMercuryAge - testMercuryLifeExpectancy));
  });

  it('should test if your remaining Venus years are accurate', function() {
    let testVenusAge = (testEarthAge / 0.62);
    let testVenusLifeExpectancy = (testAmericanLifeExpectancy / 0.62);
    expect(person.getRemainingVenusYears()).toEqual(Math.floor(testVenusAge - testVenusLifeExpectancy));
  });

  it('should test if your remaining Mars years are accurate', function() {
    let testMarsAge = (testEarthAge / 0.1.88);
    let testMarsLifeExpectancy = (testAmericanLifeExpectancy / 0.1.88);
    expect(person.getRemainingMarsYears()).toEqual(Math.floor(testMarsAge - testMarsLifeExpectancy));
  });

  it('should test if your remaining Jupiter years are accurate', function() {
    let testJupiterAge = (testEarthAge / 11.86);
    let testJupiterLifeExpectancy = (testAmericanLifeExpectancy / 11.86);
    expect(person.getRemainingJupiterYears()).toEqual(Math.floor(testJupiterAge - testJupiterLifeExpectancy));
  });
});
