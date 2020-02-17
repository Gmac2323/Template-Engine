// Requirements
const test = require("jest");
const Intern = require("../lib/Intern");

test("set school via constructor", () => {
  const testValue = "Loyola";
  const e = new Intern("John", 1, "john@world.com", "Loyola",testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("John", 1, "john@world.com", "Loyola");
  expect(e.getRole()).toBe(testValue);
});

test("get school via getSchool()", () => {
  const testValue = "Loyola";
  const e = new Intern("John", 1, "john@world.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});