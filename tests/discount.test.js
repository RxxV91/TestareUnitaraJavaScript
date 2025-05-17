const { calculateDiscount } = require("../src/discount.js");

// Gruparea testelor pentru calculateDiscount
describe("calculateDiscount", () => {
  // Test 1: Fara reduceri daca totalul e sub 100
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

  // Test 2: Client cu status standard, total peste 100 si primeste 5% reducere
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

  // Test 3: Client status gold ce are cupon si multe produse =>25% reducere
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

  // Test 4: Client silver cu comanda peste 100 => reducere 10%
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

  // Test 5: Client gold ce are cupon, comanda peste 100 si mai multe produse => reducere 30%
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

  // Test 6: validare date de intrare - totalAmount 0 ce arunca eroare
  test("throws error when totalAmount is exactly 0", () => {
    expect(() => calculateDiscount({ totalAmount: 0 })).toThrow(
      "Invalid order data!"
    );
  });

  // Test 7: validare date de intrare - totalAmount de tip string ce arunca eroare
  test("throws error when totalAmount is a string", () => {
    expect(() => calculateDiscount({ totalAmount: "100" })).toThrow(
      "Invalid order data!"
    );
  });

  // Test 8: test de frontiera - cu exact 10 produse ce declanseaza bonusul
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

  // Test 9: Cazuri invalide (null si total negative)
  test("invalid orders should throw", () => {
    expect(() => calculateDiscount(null)).toThrow();
    expect(() => calculateDiscount({ totalAmount: -100 })).toThrow();
  });
});
