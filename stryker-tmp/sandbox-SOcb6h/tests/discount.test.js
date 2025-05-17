// @ts-nocheck
const { calculateDiscount } = require("../src/discount.js");

describe("calculateDiscount", () => {
  test("no discount for orders under 100", () => {
    expect(
      calculateDiscount({
        totalAmount: 99.99,
        customerType: "gold",
        hasCoupon: false,
        items: 1,
      })
    ).toBe(0);
  });

  test("standard customer over 100", () => {
    expect(
      calculateDiscount({
        totalAmount: 200,
        customerType: "standard",
        hasCoupon: false,
        items: 1,
      })
    ).toBe(10);
  });

  test("gold customer over 100 with couponand many items", () => {
    expect(
      calculateDiscount({
        totalAmount: 500,
        customerType: "gold",
        hasCoupon: true,
        items: 15,
      })
    ).toBe(125);
  });

  test("silver customer over 100 => 10% discount ", () => {
    expect(
      calculateDiscount({
        totalAmount: 200,
        customerType: "silver",
        hasCoupon: false,
        items: 1,
      })
    ).toBe(20);
  });

  test("discount capped at 30%", () => {
    expect(
      calculateDiscount({
        totalAmount: 1000,
        customerType: "gold",
        hasCoupon: true,
        items: 20,
        forceExtra: true,
      })
    ).toBe(300);
  });

  test("throws error when totalAmount is exactly 0", () => {
    expect(() => calculateDiscount({ totalAmount: 0 })).toThrow(
      "Invalid order data!"
    );
  });

  test("throws error when totalAmount is a string", () => {
    expect(() => calculateDiscount({ totalAmount: "100" })).toThrow(
      "Invalid order data!"
    );
  });

  test("items exactly 10 should trigger discount ", () => {
    expect(
      calculateDiscount({
        totalAmount: 200,
        customerType: "gold",
        hasCoupon: false,
        items: 10,
      })
    ).toBe(40);
  });

  test("invalid orders should throw", () => {
    expect(() => calculateDiscount(null)).toThrow();
    expect(() => calculateDiscount({ totalAmount: -100 })).toThrow();
  });
});
