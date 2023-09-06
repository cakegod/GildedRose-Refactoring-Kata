export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Sulfuras {
  name: string;
  quality: number;
  sellIn: number

  constructor({name, quality, sellIn}: Item) {
    this.name = name;
    this.quality = quality;
    this.sellIn = sellIn;
  }

  update() {
    return this
  }
}

class AgedBrie {
  name: string;
  quality: number;
  sellIn: number

  constructor({name, quality, sellIn}: Item) {
    this.name = name;
    this.quality = quality < 50 ? quality : 50
    this.sellIn = sellIn;
  }

  increaseQuality(quantity = 1) {
    if (this.quality < 50) {
      this.quality += quantity
    }
  }

  update() {
    this.increaseQuality();

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.increaseQuality();
    }

    return this
  }
}

class Backseat {
  name: string;
  quality: number;
  sellIn: number

  constructor({name, quality, sellIn}: Item) {
    this.name = name;
    this.quality = quality < 50 ? quality : 50
    this.sellIn = sellIn;
  }

  increaseQuality(quantity = 1) {
    if (this.quality < 50) {
      this.quality += quantity
    }
  }

  update() {
    this.increaseQuality();
    if (this.sellIn <= 10) {
      this.increaseQuality();
    }
    if (this.sellIn <= 5) {
      this.increaseQuality();
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0
    }
    return this
  }
}

class Regular {
  name: string;
  quality: number;
  sellIn: number

  constructor({name, quality, sellIn}: Item) {
    this.name = name;
    this.quality = quality < 50 ? quality : 50
    this.sellIn = sellIn;
  }

  decreaseQuality(quantity = 1) {
    if (this.quality > 0) {
      this.quality -= quantity
    }
  }

  update() {

    this.decreaseQuality();

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.decreaseQuality();
    }

    return this
  }
}

class Conjured {
  name: string;
  quality: number;
  sellIn: number

  constructor({name, quality, sellIn}: Item) {
    this.name = name;
    this.quality = quality < 50 ? quality : 50
    this.sellIn = sellIn;
  }

  decreaseQuality(quantity = 1) {
    if (this.quality > 0) {
      this.quality -= quantity
    }
  }

  update() {

    this.decreaseQuality(2);

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.decreaseQuality(2);
    }

    return this
  }
}

export { Sulfuras, AgedBrie, Backseat, Regular, Conjured }
