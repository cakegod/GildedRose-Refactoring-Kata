import { AgedBrie, Backseat, Conjured, Item, Regular, Sulfuras } from "@/items";

export class GildedRose {
  items: Item[]

  constructor(items = [] as Item[]) {
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



