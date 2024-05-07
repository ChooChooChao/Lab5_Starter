// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber unit tests
test('(626)777-0000 is a valid phone number', () => {
  expect(isPhoneNumber("(626)777-0000")).toBe(true);
});

test('(123)456-7891 is a valid phone number', () => {
  expect(isPhoneNumber("(123)456-7891")).toBe(true);
});

test('1234567891 is not a valid phone number', () => {
  expect(isPhoneNumber("1234567891")).toBe(false);
});

test('empty value is not a valid phone number', () => {
  expect(isPhoneNumber("")).toBe(false);
});


// isEmail unit tests
test('email nchao@ucsd.edu is a valid email', () => {
  expect(isEmail("nchao@ucsd.edu")).toBe(true);
});

test('email nathanchao318@gmail.com is a valid email', () => {
  expect(isEmail("nathanchao318@gmail.com")).toBe(true);
});

test('nchaoucsd.edu is not a valid email', () => {
  expect(isEmail("nchaoucsd.edu")).toBe(false);
});

test('empty value is not a valid email', () => {
  expect(isEmail("")).toBe(false);
});

// isStrongPassword unit tests
test('Nathan12345 is a strong password', () => {
  expect(isStrongPassword("Nathan12345")).toBe(true);
});

test('Powell_12345 is a strong password', () => {
  expect(isStrongPassword("Powell_12345")).toBe(true);
});

test('12345 is not a strong password', () => {
  expect(isStrongPassword("12345")).toBe(false);
});

test('______ is not a strong password', () => {
  expect(isStrongPassword("______")).toBe(false);
});

// isDate unit test
test('03/09/2003 is a valid date', () => {
  expect(isDate("03/09/2003")).toBe(true);
});

test('3/9/2003 is a valid date', () => {
  expect(isDate("3/9/2003")).toBe(true);
});

test('3/9/03 is not a valid date', () => {
  expect(isDate("3/9/03")).toBe(false);
});

test('3/009/2003 is not a valid date', () => {
  expect(isDate("3/009/2003")).toBe(false);
});

// isHexColor unit tests
test('#000000 is a valid hex color', () => {
  expect(isHexColor("#ff0000")).toBe(true);
});

test('#fc9 is a valid hex color', () => {
  expect(isHexColor("#fc9")).toBe(true);
});

test('#fc is not a valid hex color', () => {
  expect(isHexColor("#fc")).toBe(false);
});

test('#fffffff is not a valid hex color', () => {
  expect(isHexColor("#fffffff")).toBe(false);
});