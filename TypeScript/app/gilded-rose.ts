export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
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
    this.items.forEach(item => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return

      if (item.name === 'Aged Brie') {
        this.increaseQuality(item);
        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0) {
          this.increaseQuality(item);
        }
        return
      }

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item);
        if (item.sellIn < 11) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this.increaseQuality(item);
        }

        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0) {
          item.quality = item.quality - item.quality
        }
        return
      }


      this.decreaseQuality(item);

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = item.quality - item.quality
        } else {
          this.decreaseQuality(item);
        }
      }
    });

    return this.items;
  }

  private increaseQuality(item: Item, quality = 1) {
    if (item.quality < 50) {
      item.quality += quality
    }
  }

  private decreaseQuality(item: Item, quantity = 1) {
    if (item.quality > 0) {
      item.quality -= quantity
    }
  }
}
