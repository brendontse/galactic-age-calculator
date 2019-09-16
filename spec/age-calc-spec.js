import { Person } from './../src/ageCalculator.js';

describe('Person', function() {
  let userInput;
  let testAge;

  beforeEach(function() {
    userInput = new Person(24, 79);
  });

  it('should test if Earth age is what the user inputted', function() {
    expect(userInput.age).toEqual(24);
  });


  it('should test if Mercury age is accurate', function() {
    testAge = Math.floor(userInput.age / 0.24);
    expect(userInput.getMercuryAge()).toEqual(testAge);
  });

  it('should test if Venus age is accurate', function() {
    let testAge = Math.floor(userInput.age / 0.62);
    expect(userInput.getVenusAge()).toEqual(testAge);
  });

  it('should test if Mars age is accurate', function() {
    let testAge = Math.floor(userInput.age / 1.88);
    expect(userInput.getMarsAge()).toEqual(testAge);
  });

  it('should test if Jupiter age is accurate', function() {
    let testAge = Math.floor(userInput.age / 11.86);
    expect(userInput.getJupiterAge()).toEqual(testAge);
  });
});

describe('LifeExpectancy', function() {
  let userInput;
  let testAge;

  beforeEach(function() {
    userInput = new Person(24, 79);
  });

  it('should test if your remaining Earth years are accurate', function() {
    expect(userInput.getRemainingEarthYears()).toEqual(55);
  });

  it('should test if your remaining Mercury years are accurate', function() {
    expect(userInput.getRemainingMercuryYears()).toEqual(229);
  });

  it('should test if your remaining Mercury years are accurate', function() {
    expect(userInput.getRemainingVenusYears()).toEqual(89);
  });

  it('should test if your remaining Mars years are accurate', function() {
    expect(userInput.getRemainingMarsYears()).toEqual(30);
  });

  it('should test if your remaining Jupiter years are accurate', function() {
    expect(userInput.getRemainingJupiterYears()).toEqual(4);
  });
});
