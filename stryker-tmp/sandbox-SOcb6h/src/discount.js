// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
function calculateDiscount(order) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    if (stryMutAct_9fa48("3") ? (!order || typeof order.totalAmount !== "number") && order.totalAmount < 0 : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), (stryMutAct_9fa48("5") ? !order && typeof order.totalAmount !== "number" : stryMutAct_9fa48("4") ? false : (stryCov_9fa48("4", "5"), (stryMutAct_9fa48("6") ? order : (stryCov_9fa48("6"), !order)) || (stryMutAct_9fa48("8") ? typeof order.totalAmount === "number" : stryMutAct_9fa48("7") ? false : (stryCov_9fa48("7", "8"), typeof order.totalAmount !== (stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), "number")))))) || (stryMutAct_9fa48("12") ? order.totalAmount >= 0 : stryMutAct_9fa48("11") ? order.totalAmount <= 0 : stryMutAct_9fa48("10") ? false : (stryCov_9fa48("10", "11", "12"), order.totalAmount < 0)))) {
      if (stryMutAct_9fa48("13")) {
        {}
      } else {
        stryCov_9fa48("13");
        throw new Error(stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), "Invalid order data!"));
      }
    }
    let discountRate = 0;
    if (stryMutAct_9fa48("18") ? order.totalAmount < 100 : stryMutAct_9fa48("17") ? order.totalAmount > 100 : stryMutAct_9fa48("16") ? false : stryMutAct_9fa48("15") ? true : (stryCov_9fa48("15", "16", "17", "18"), order.totalAmount >= 100)) {
      if (stryMutAct_9fa48("19")) {
        {}
      } else {
        stryCov_9fa48("19");
        switch (order.customerType) {
          case stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), "gold"):
            if (stryMutAct_9fa48("20")) {} else {
              stryCov_9fa48("20");
              stryMutAct_9fa48("22") ? discountRate -= 0.15 : (stryCov_9fa48("22"), discountRate += 0.15);
              break;
            }
          case stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), "silver"):
            if (stryMutAct_9fa48("23")) {} else {
              stryCov_9fa48("23");
              stryMutAct_9fa48("25") ? discountRate -= 0.1 : (stryCov_9fa48("25"), discountRate += 0.1);
              break;
            }
          case stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), "standard"):
            if (stryMutAct_9fa48("26")) {} else {
              stryCov_9fa48("26");
              stryMutAct_9fa48("28") ? discountRate -= 0.05 : (stryCov_9fa48("28"), discountRate += 0.05);
              break;
            }
        }
        if (stryMutAct_9fa48("30") ? false : stryMutAct_9fa48("29") ? true : (stryCov_9fa48("29", "30"), order.hasCoupon)) {
          if (stryMutAct_9fa48("31")) {
            {}
          } else {
            stryCov_9fa48("31");
            stryMutAct_9fa48("32") ? discountRate -= 0.05 : (stryCov_9fa48("32"), discountRate += 0.05);
          }
        }
        if (stryMutAct_9fa48("36") ? order.items < 10 : stryMutAct_9fa48("35") ? order.items > 10 : stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : (stryCov_9fa48("33", "34", "35", "36"), order.items >= 10)) {
          if (stryMutAct_9fa48("37")) {
            {}
          } else {
            stryCov_9fa48("37");
            stryMutAct_9fa48("38") ? discountRate -= 0.05 : (stryCov_9fa48("38"), discountRate += 0.05);
          }
        }
        if (stryMutAct_9fa48("40") ? false : stryMutAct_9fa48("39") ? true : (stryCov_9fa48("39", "40"), order.forceExtra)) {
          if (stryMutAct_9fa48("41")) {
            {}
          } else {
            stryCov_9fa48("41");
            stryMutAct_9fa48("42") ? discountRate -= 0.1 : (stryCov_9fa48("42"), discountRate += 0.1);
          }
        }
        if (stryMutAct_9fa48("46") ? discountRate <= 0.3 : stryMutAct_9fa48("45") ? discountRate >= 0.3 : stryMutAct_9fa48("44") ? false : stryMutAct_9fa48("43") ? true : (stryCov_9fa48("43", "44", "45", "46"), discountRate > 0.3)) {
          if (stryMutAct_9fa48("47")) {
            {}
          } else {
            stryCov_9fa48("47");
            discountRate = 0.3;
          }
        }
      }
    }
    return stryMutAct_9fa48("48") ? -(order.totalAmount * discountRate).toFixed(2) : (stryCov_9fa48("48"), +(stryMutAct_9fa48("49") ? order.totalAmount / discountRate : (stryCov_9fa48("49"), order.totalAmount * discountRate)).toFixed(2));
  }
}
module.exports = stryMutAct_9fa48("50") ? {} : (stryCov_9fa48("50"), {
  calculateDiscount
});