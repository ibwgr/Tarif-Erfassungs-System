"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeasonalTariff = exports.Tariff = exports.Product = exports.Operator = void 0;

class Operator {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

}

exports.Operator = Operator;

class Product {
  constructor(id, operatorId, name, tariff, isDefault) {
    this.id = id;
    this.operatorId = operatorId;
    this.name = name;
    this.tarif = tariff;
    this.isDefault = isDefault;
  }

}

exports.Product = Product;

class Tariff {
  constructor(year, validFromKwh, validToKwh, gridPeakPowerTarif, municipalityFee, basicFeeMonthly) {
    this.year = year;
    this.validFromKwh = validFromKwh;
    this.validToKwh = validToKwh;
    this.gridPeakPowerTariff = gridPeakPowerTarif;
    this.municipalityFee = municipalityFee;
    this.basicFeeMonthly = basicFeeMonthly;
    this.winter = null;
    this.sumemr = null;
  }

}

exports.Tariff = Tariff;

class SeasonalTariff {
  constructor() {
    this.ht = ht;
    this.lt = lt;
    this.ht_start_monday = null;
    this.ht_end_monday = null;
    this.ht_end_saturday = null;
    this.ht_start_saturday = null;
    this.ht_start_sunday = null;
    this.ht_end_sunday = null;
    this.month = month;
  }

}

exports.SeasonalTariff = SeasonalTariff;

class Month {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

} // let januar = new Month("January", 1)
// let februar = new Month("Februar", 2)
// let months = [januar, februar]
//
// let tarif1 = new Tarif(12.3,14, months)
//
// let operator1 = new Operator("Rhiienergie", 1244)
//
// let product = new Product("sdsdf", tarif1, operator1)
//
// console.log(product)