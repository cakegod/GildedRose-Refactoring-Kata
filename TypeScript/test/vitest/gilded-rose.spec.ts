import {GildedRose} from "@/gilded-rose";
import {Item} from "@/items";

const itemsName = [
  "+5 Dexterity Vest",
  "Aged Brie",
  "Elixir of the Mongoose",
  "Sulfuras, Hand of Ragnaros",
  "Backstage passes to a TAFKAL80ETC concert",
  "Conjured Mana Cake",
];


function setup(name: string, sellIn: number, quality: number) {
  const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
  gildedRose.updateQuality();
  return gildedRose;
}

describe("Gilded Rose", () => {
  describe("non-legendary items", () => {
    it("should not have negative quality", () => {
      const gildedRose = new GildedRose(
        itemsName.flatMap((name) =>
          name !== "Sulfuras, Hand of Ragnaros" ? [new Item(name, 0, 0)] : []
        )
      );
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });
  describe("regular items", () => {
    it("should decrease quality", () => {
      const gildedRose = setup("foo", 2, 2);
      expect(gildedRose.items[0].quality).toBe(1);
    });

    it("should decrease sellIn", () => {
      const gildedRose = setup("foo", 2, 2);
      expect(gildedRose.items[0].sellIn).toBe(1);
    });

    it("should decrease quality twice as fast when sellIn is negative", () => {
      const gildedRose = setup("foo", -1, 2);
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it("should not have negative quality", () => {
      const gildedRose = setup("foo", -1, 0);
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });

  describe("sulfuras item", () => {
    it("should not increase or decrease quality", () => {
      const gildedRose = setup("Sulfuras, Hand of Ragnaros", 1, 80);
      expect(gildedRose.items[0].quality).toBe(80);
    });

    it("should not increase or decrease sellIn", () => {
      const gildedRose = setup("Sulfuras, Hand of Ragnaros", 1, 80);
      expect(gildedRose.items[0].sellIn).toBe(1);
    });
  });

  describe("backseat", () => {
    it("should increase quality", () => {
      const gildedRose = setup(
        "Backstage passes to a TAFKAL80ETC concert",
        20,
        2
      );
      expect(gildedRose.items[0].quality).toBe(3);
    });

    it("should increase quality by 2 when sellIn is 10 or less", () => {
      const gildedRose = setup(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        2
      );
      expect(gildedRose.items[0].quality).toBe(4);
    });

    it("should increase quality by 3 when sellIn is 5 or less", () => {
      const gildedRose = setup(
        "Backstage passes to a TAFKAL80ETC concert",
        5,
        2
      );
      expect(gildedRose.items[0].quality).toBe(5);
    });

    it("should have quality set to 0 after a concert - after sellIn is negative", () => {
      const gildedRose = setup(
        "Backstage passes to a TAFKAL80ETC concert",
        0,
        2
      );
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it("should decrease sellIn", () => {
      const gildedRose = setup(
        "Backstage passes to a TAFKAL80ETC concert",
        0,
        2
      );
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("aged brie", () => {
    it("should increase quality", () => {
      const gildedRose = setup("Aged Brie", 2, 2);
      expect(gildedRose.items[0].quality).toBe(3);
    });

    it("should increase quality by 2 when sellIn is negative", () => {
      const gildedRose = setup("Aged Brie", 0, 2);
      expect(gildedRose.items[0].quality).toBe(4);
    });

    it("should decrease sellIn", () => {
      const gildedRose = setup("Aged Brie", 0, 2);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe("conjured mana cake", () => {
    it("should decrease quality by 2", () => {
      const gildedRose = setup("Conjured Mana Cake", 2, 2);
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it("should decrease quality by 4 when sellIn is negative", () => {
      const gildedRose = setup("Conjured Mana Cake", 0, 5);
      expect(gildedRose.items[0].quality).toBe(1);
    });

    it("should decrease sellIn", () => {
      const gildedRose = setup("Conjured Mana Cake", 0, 5);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });
  });
});
