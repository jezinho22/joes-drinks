// My own task 3
// units of alcohol in drinks : 1 unit = 10 ml of alcohol
// so if wine is 12% and a glass is 175ml, alcohol is 175 * 0.12, and units is alcohol / 10
// and if price is taken into account: we can, like my student son, compare
// how much a unit of alcohol costs for different drinks ...
// So that's volume * %alcohol/100
// then divided by 10ml for units of alcohol
// then price divided by units of alcohol - this is sounding quite seedy but geeky

// create object
var UnitsOfAlcohol = function (name, capacity, alcByVolume, price) {
	this.name = name;
	this.capacity = capacity;
	this.alcByVolume = alcByVolume;
	this.price = price;
};

UnitsOfAlcohol.prototype.pricePerUnit = function () {
	var units = (this.capacity * this.alcByVolume) / 100 / 10;
	var pricePerUnit = this.price / units;
	return `${this.name} contains ${units.toFixed(
		2
	)} units of alcohol. If you buy a ${this.capacity} of ${
		this.name
	}, you pay £${pricePerUnit.toFixed(2)} per unit of alcohol`;
};

// var aldiPinot = new UnitsOfAlcohol("Aldi pinot grigio", 750, 11.5, 3.99);
// var aldiPort = new UnitsOfAlcohol("Aldi port", 750, 19, 6.69);
// var aldiCider = new UnitsOfAlcohol("Aldi taurus cider", 4 * 440, 5, 2.39);
// var aldiGalahad = new UnitsOfAlcohol("Aldi galahad beer", 4 * 440, 4, 2.49);
// var aldi1897 = new UnitsOfAlcohol("Aldi 1897 beer", 4 * 440, 5, 3.59);
// var aldiStEtienne = new UnitsOfAlcohol("Aldi St Etienne", 4 * 440, 4.8, 3.19);
// var aldiWhisky = new UnitsOfAlcohol(
// 	"Aldi highland earl whisky",
// 	700,
// 	40,
// 	11.49
// );

// console.log(aldiPinot.pricePerUnit());
// console.log(aldiPort.pricePerUnit());
// console.log(aldiCider.pricePerUnit());
// console.log(aldiGalahad.pricePerUnit());
// console.log(aldi1897.pricePerUnit());
// console.log(aldiStEtienne.pricePerUnit());
// console.log(aldiWhisky.pricePerUnit());
