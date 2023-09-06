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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items = this.items.map(item => {
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros':
          return new Sulfuras(item).update()
        case 'Aged Brie':
          return new AgedBrie(item).update()
        case 'Backstage passes to a TAFKAL80ETC concert':
          return new Backseat(item).update()
        case 'Conjured Mana Cake':
          return new Conjured(item).update()
        default:
          return new Regular(item).update()
      }
    });

    return this.items
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

