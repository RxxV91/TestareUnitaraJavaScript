/**
 * Calculeaza valoarea reducerii pentru o comanda, in functie de:
 * - suma totala a comenzii
 * - statusul clientului (gold, silver, standard)
 * - cupon de reducere
 * - numarul de produse
 * - optiunea forceExtra pentru testare
 * @param {Object} order - obiectul primit ca date de intrare si care contine datele comenzii
 * @returns {number} - valoarea reducerii rotunjita la 2 zecimale
 */
function calculateDiscount(order) {
  // valoarea order cu conditia sa existe, sa aiba un totalAmount numar si sa fie pozitiv
  if (
    !order ||
    typeof order.totalAmount !== "number" ||
    order.totalAmount <= 0
  ) {
    throw new Error("Invalid order data!");
  }

  // initializarea constantei ce discount
  let discountRate = 0;

  //Aplicarea reducerii daca totalul este mai mare sau egal cu 100
  if (order.totalAmount >= 100) {
    // Reducerea de baza in functie de statusul clientului.
    switch (order.customerType) {
      case "gold":
        discountRate += 0.15;
        break;
      case "silver":
        discountRate += 0.1;
        break;
      case "standard":
        discountRate += 0.05;
        break;
    }
    // Reducere suplimentara daca exista cupon
    if (order.hasCoupon) {
      discountRate += 0.05;
    }
    // Reducere suplimentara pentru comenzi cu mai mult de 10 produse
    if (order.items >= 10) {
      discountRate += 0.05;
    }

    // Optiune speciala pentru testare pentru a acoperi toate cazurile: forteazadepasirea pragului stabilit de 30%
    if (order.forceExtra) {
      discountRate += 0.1;
    }

    // Plafonarea reducerii la 30%
    if (discountRate > 0.3) {
      discountRate = 0.3;
    }
  }

  // Returnarea valorii de reducere rotunjita la 2 zecimale.
  return +(order.totalAmount * discountRate).toFixed(2);
}

module.exports = { calculateDiscount };
