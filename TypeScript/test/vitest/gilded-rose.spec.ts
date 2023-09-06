import {Item, GildedRose} from '@/gilded-rose';

function combine(name: string, quantity: number, sellIn: number) {
  return {name, quantity, sellIn}
}

const itemsName = [
  "+5 Dexterity Vest",
  "Aged Brie",
  "Elixir of the Mongoose",
  "Sulfuras, Hand of Ragnaros",
  "Backstage passes to a TAFKAL80ETC concert",
  "Conjured Mana Cake"
]

const quantities = [-1, 0, 1, 2, 5, 10, 40, 50, 60]
const sellIns = [-1, 0, 1, 2, 5, 10, 40, 50, 60]

describe('Gilded Rose', () => {
  it('should foo', () => {
    const combinations =
      itemsName.flatMap((name) =>
        quantities.map(quantity =>
          sellIns.flatMap(sellIn => combine(name, quantity, sellIn))))

    combinations.forEach(combination => {
      const gildedRose = new GildedRose(combination.map(c => new Item(c.name, c.quantity, c.sellIn)))


      for (let i = 0; i < 10; i++) {
        expect(gildedRose.items).toMatchSnapshot();
        gildedRose.updateQuality()
      }

    })
  });
});
