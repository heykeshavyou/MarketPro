import { Injectable, signal } from '@angular/core';
import Cart from '../Models/Cart';
import Category from '../Models/Category';
import Product from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  Cart: Cart[] = this.GetSavedData();
  Wishlist: Product[] = this.GetWishListData();
  CartProduct: Product[] = [];
  CartCount = signal(this.Cart.length);
  WishlistCount = signal(this.Wishlist.length);
  SubTotal = signal(0);
  Delivery = signal((this.SubTotal() * 10) / 100);
  Taxs = signal((this.SubTotal() * 18) / 100);
  Discount = signal(0);
  Total = signal(0);
  Categories: Category[] = [
    {
      Id: 1,
      Name: 'Beauty & Care',
      Color: 'bg-[#a1a1a1]',
      Img: '/Cate1.png',
    },
    {
      Id: 2,
      Name: 'Fashion & Cloths',
      Color: 'bg-[#a9f0ad]',
      Img: '/Cate2.png',
    },
    {
      Id: 3,
      Name: 'Furniture & Fittings',
      Color: 'bg-[#e09e86]',
      Img: '/Cate3.png',
    },
    {
      Id: 4,
      Name: 'Daily & Groceries',
      Color: 'bg-[#cbe087]',
      Img: '/Cate4.png',
    },
    {
      Id: 5,
      Name: 'Electronics',
      Color: 'bg-[#858585]',
      Img: '/Cate5.png',
    },
    {
      Id: 6,
      Name: 'Phones & Gadgets',
      Color: 'bg-[#7fd5fa]',
      Img: '/Cate6.png',
    },
    {
      Id: 7,
      Name: 'Sports & Fitness',
      Color: 'bg-[#ffec80]',
      Img: '/Cate7.png',
    },
    {
      Id: 8,
      Name: 'Toys & Kids',
      Color: 'bg-[#ffda99]',
      Img: '/Cate8.png',
    },
    {
      Id: 9,
      Name: 'Books & Stationary',
      Color: 'bg-[#ffcf91]',
      Img: '/Cate9.png',
    },
  ];
  Products: Product[] = [
    {
      Id: 1,
      Name: 'Hairfall Shampoo',
      Price: 499,
      OfferPrice: 391,
      Rating: 4.3,
      RatingCount: 1863,
      CategoryId: 1,
      Descripation:
        'CONTROLS HAIRFALL : WishCare Anti HairFall Shampoo is an advanced formulation that prolongs the anagen phase of hair thereby reducing hairfall and promoting hair growth. It works on your scalp to activate and energize follicles thereby working on the root cause of hairfall. Overall it will improve hair and scalp health to make your hair stronger and shinier MULTI PEPTIDE & RICE WATER : This Shampoo contains Peptides & Rice Water which works on th root and along your strands to prevent hair loss due to scalp or strength issues and avoid hairfall due to breakage, splitends or scalp dryness',
      Img: '/product1.jpg',
      Quantity: 23,
    },
    {
      Id: 2,
      Name: 'Men Jeans',
      Price: 2999,
      OfferPrice: 699,
      Rating: 3.9,
      RatingCount: 2030,
      CategoryId: 2,
      Descripation:
        'Loose Fit: Ben Martin Loose Fit Jeans Pant Designed for comfort and a relaxed style. Denim Material: Durable and classic denim fabric for a timeless look of this Baggy Jeans for Men.',
      Img: '/product2.jpg',
      Quantity: 63,
    },
    {
      Id: 3,
      Name: 'Nilkamal Octo Baby Desk Chair',
      Price: 1400,
      OfferPrice: 1000,
      Rating: 3.9,
      RatingCount: 75,
      CategoryId: 3,
      Descripation:
        'Nilkamal Quality Assurance: Backed by a 3-year warranty, ensuring a long-lasting, high-quality product from the trusted Nilkamal brand. Multifunctional Design: It serves as a desk for homework, reading, eating, and other activities. It is perfect for kids aged 3 to 5 years.',
      Img: '/product3.jpg',
      Quantity: 23,
    },
    {
      Id: 4,
      Name: 'Borges Olive Oil',
      Price: 3927,
      OfferPrice: 2602,
      Rating: 3.3,
      RatingCount: 390,
      CategoryId: 4,
      Descripation:
        'Perfect for Everyday Cooking: Perfectly suited for everyday Indian cooking methods like deep frying, tadka, and making paratha due to its suitability for high-heat cooking.',
      Img: '/product4.jpg',
      Quantity: 64,
    },
    {
      Id: 5,
      Name: 'HP 15, 13th Gen Intel Core i3-1315U Laptop',
      Price: 4736,
      OfferPrice: 2678,
      Rating: 4.1,
      RatingCount: 162,
      CategoryId: 5,
      Descripation:
        '【6-core 13th Gen Intel Core i3-1315U】Experience powerful performance with a processor that features 8 threads and 10 MB L3 cache for smooth multitasking and fast processing.',
      Img: '/product5.jpg',
      Quantity: 92,
    },
    {
      Id: 6,
      Name: 'Apple iPhone 15',
      Price: 1917,
      OfferPrice: 927,
      Rating: 2.4,
      RatingCount: 340,
      CategoryId: 6,
      Descripation:
        'DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.',
      Img: '/product6.jpg',
      Quantity: 49,
    },
    {
      Id: 7,
      Name: 'Leader Beast 26T Mountain Cycle ',
      Price: 4137,
      OfferPrice: 1666,
      Rating: 4.6,
      RatingCount: 106,
      CategoryId: 7,
      Descripation:
        'The cycle is delivered in Semi-Assembled condition (90% assembled). Customer needs to assemble it before use. Allen Key & Spanner provided in box for installation.',
      Img: '/product7.jpg',
      Quantity: 97,
    },
    {
      Id: 8,
      Name: 'Nerf Pro Gelfire Mythic Blaster',
      Price: 3821,
      OfferPrice: 1965,
      Rating: 2.8,
      RatingCount: 273,
      CategoryId: 8,
      Descripation:
        'BURST INTO BATTLE WITH NERF PRO GELFIRE BLASTERS: The blasters fire hydrated rounds that burst on impact and deliver high-performance blasting to ignite your competitive advantage. Ages 14 and up',
      Img: '/product8.jpg',
      Quantity: 41,
    },
    {
      Id: 9,
      Name: 'Metamorphosis',
      Price: 3057,
      OfferPrice: 1466,
      Rating: 1.6,
      RatingCount: 222,
      CategoryId: 9,
      Descripation:
        'How significant can a picture of a woman in fur be when you try to hold it dear as the only resemblance left to human life? When Gregor Samsa wakes up in his bed, he is aghast to find himself transformed into a giant bug. He is now to spend the rest of his life in that state. Life to him becomes a struggle to align his lingering humanity and his transformed physicality. Thus begins Metamorphosis. Delving into absurdity of life, the disconnect between the mind and body and limits of sympathy, the book has been cited as one of the seminal works of twentieth-century fiction.',
      Img: '/product9.jpg',
      Quantity: 36,
    },
    {
      Id: 10,
      Name: 'Cetaphil Paraben, Sulphate-Free',
      Price: 4467,
      OfferPrice: 1830,
      Rating: 4.2,
      RatingCount: 114,
      CategoryId: 1,
      Descripation:
        'IDEAL FOR DRY TO NORMAL SENSITIVE SKIN: Non-Comedogenic, Hypoallergenic formula free from Parabens, Sulphates, Fragrances & Oils',
      Img: '/product10.jpg',
      Quantity: 89,
    },
    {
      Id: 11,
      Name: 'Bewakoof Women Cotton Solid Slim Fit T-Shirt',
      Price: 3306,
      OfferPrice: 2193,
      Rating: 2.3,
      RatingCount: 398,
      CategoryId: 2,
      Descripation:
        'Fabric Description : Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton',
      Img: '/product11.jpg',
      Quantity: 31,
    },
    {
      Id: 12,
      Name: 'TABLE MAGIC - Pro Extended Work Space',
      Price: 3843,
      OfferPrice: 2477,
      Rating: 3.8,
      RatingCount: 51,
      CategoryId: 3,
      Descripation:
        'TABLE MAGIC - Pro Extended work Space with cup-holder (More space for mouse) Table top Size 55*40 Cm, Pull-Out Cup Holder to Hold Coffee Cup or Water Bottle.',
      Img: '/product12.jpg',
      Quantity: 24,
    },
    {
      Id: 13,
      Name: 'Mother Dairy Cow Milk, 500 ML, liquid',
      Price: 2230,
      OfferPrice: 1453,
      Rating: 4.4,
      RatingCount: 419,
      CategoryId: 4,
      Descripation:
        'Storage instructions: Store in a cool, dry & hygiene place',
      Img: '/product13.jpg',
      Quantity: 17,
    },
    {
      Id: 14,
      Name: 'Marshall Emberton II 20 W Wireless Bluetooth',
      Price: 2290,
      OfferPrice: 1308,
      Rating: 3.0,
      RatingCount: 226,
      CategoryId: 5,
      Descripation: '30+ HOURS OF PORTABLE PLAYTIME',
      Img: '/product14.jpg',
      Quantity: 81,
    },
    {
      Id: 15,
      Name: 'OnePlus Nord 5 ',
      Price: 2092,
      OfferPrice: 1354,
      Rating: 1.4,
      RatingCount: 193,
      CategoryId: 6,
      Descripation:
        'Flagship Performance with Snapdragon(TM) 8s Gen 3: Couple this with the latest LPDDR5X RAM and segment-leading VC cooling (7300mm2), enjoy unprecedented 144 FPS BGMI and CODM steady-smooth gaming for a cool 5 hours.',
      Img: '/product15.jpg',
      Quantity: 65,
    },
    {
      Id: 16,
      Name: ' Rubber Encased Hex Dumbbell',
      Price: 2937,
      OfferPrice: 1778,
      Rating: 2.9,
      RatingCount: 451,
      CategoryId: 7,
      Descripation:
        'Dumbbell for resistance training—great for arms, chest, back, core, and legs',
      Img: '/product16.jpg',
      Quantity: 20,
    },
    {
      Id: 17,
      Name: 'PEPPA PIG Family House Playset',
      Price: 3944,
      OfferPrice: 1093,
      Rating: 4.5,
      RatingCount: 102,
      CategoryId: 8,
      Descripation:
        'PEPPA PIG’S FAMILY HOUSE PLAYSET TOY lets kids ages 3 and up imagine everyday life with their favorite 4-year-old pig. Peppa’s 2-story house is inspired by her home in the popular TV show',
      Img: '/product17.jpg',
      Quantity: 11,
    },
    {
      Id: 18,
      Name: 'SHUTTLE ART 50 Sheets',
      Price: 3193,
      OfferPrice: 1504,
      Rating: 1.1,
      RatingCount: 473,
      CategoryId: 9,
      Descripation:
        'Practical Design = Transparent Sticky Notes Compared with Traditional Sticky Notes, a Clear Sticky Notes Design Can Avoid Blocking the Original Files, on the Page Adds Annotations to Books or Mark Important Documents Without Stain Book, Sticky Notes Clear Making Learning Easier.',
      Img: '/product18.jpg',
      Quantity: 99,
    },
    {
      Id: 19,
      Name: 'Makeup Remover',
      Price: 1741,
      OfferPrice: 813,
      Rating: 3.1,
      RatingCount: 68,
      CategoryId: 1,
      Descripation:
        '𝗘𝗰𝗼-𝗳𝗿𝗶𝗲𝗻𝗱𝗹𝘆 & 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲: The reusable makeup remover pads are an eco-friendly and sustainable alternative to our single-time cotton pads. Our pads are washable which is a great product for an environmentally-conscious consumer. These soft circular pads look like disposable cotton round pads but they can be tossed in your travel vanity for a quick clean.',
      Img: '/product19.jpg',
      Quantity: 59,
    },
    {
      Id: 20,
      Name: 'Straight Fit Jeans',
      Price: 4923,
      OfferPrice: 3935,
      Rating: 2.7,
      RatingCount: 339,
      CategoryId: 2,
      Descripation: 'Womens Mid Rise Wedgie Straight Fit Jeans',
      Img: '/product20.jpg',
      Quantity: 74,
    },
    {
      Id: 21,
      Name: 'Spacecrafts Recliner',
      Price: 2298,
      OfferPrice: 1074,
      Rating: 4.8,
      RatingCount: 486,
      CategoryId: 3,
      Descripation:
        ' Lightweight reinforced oblate tube. Quality crafted textoline fabric for easy clean up. The low maintenance close-weave fabric in classic color will easily co-ordinate with other garden furniture. This chair uses ergonomic design to reduce muscle tension and stress. Lays completely flat and has a perfect balance between firmness and softness',
      Img: '/product21.jpg',
      Quantity: 84,
    },
    {
      Id: 22,
      Name: 'Bonn Bread White Bread - Soft & Nutritious',
      Price: 43,
      OfferPrice: 12,
      Rating: 3.6,
      RatingCount: 411,
      CategoryId: 4,
      Descripation:
        'The finest range of healthy breads with taste of freshness in every slice that will make your every day morning a more refreshing day to begin with',
      Img: '/product22.jpg',
      Quantity: 45,
    },
    {
      Id: 23,
      Name: '4K 3840x2160 Monitor',
      Price: 11432,
      OfferPrice: 6384,
      Rating: 1.9,
      RatingCount: 135,
      CategoryId: 5,
      Descripation:
        '[Show Mac Colors] Calibrated for MacBook with BenQ’s exclusive color tuning, offering a vibrant P3 wide color gamut for MacBook Air and Pro.',
      Img: '/product23.jpg',
      Quantity: 12,
    },
    {
      Id: 24,
      Name: 'OnePlus 13 ',
      Price: 4464,
      OfferPrice: 2915,
      Rating: 2.0,
      RatingCount: 471,
      CategoryId: 6,
      Descripation:
        'Flagship power made smarter with Qualcomm Snapdragon 8 Elite Mobile Platform – the heart that powers the mind of OnePlus AI. With a faster Neural Engine, an improved CPU and GPU, and a big jump in memory bandwidth.',
      Img: '/product24.jpg',
      Quantity: 38,
    },
    {
      Id: 25,
      Name: 'Lifelong Yoga mat',
      Price: 1584,
      OfferPrice: 702,
      Rating: 4.0,
      RatingCount: 385,
      CategoryId: 7,
      Descripation:
        'Thickness: This 4mm durable mat is designed to provide the best cushioning and make your exercise sessions comfortable',
      Img: '/product25.jpg',
      Quantity: 22,
    },
    {
      Id: 26,
      Name: 'Hot Wheels 5-Car',
      Price: 3874,
      OfferPrice: 1359,
      Rating: 2.6,
      RatingCount: 421,
      CategoryId: 8,
      Descripation:
        'Includes five Hot Wheels vehicles with genuine die-cast parts.',
      Img: '/product26.jpg',
      Quantity: 98,
    },
    {
      Id: 27,
      Name: ' Premium Pencil Case Hang ',
      Price: 2096,
      OfferPrice: 1317,
      Rating: 4.3,
      RatingCount: 115,
      CategoryId: 9,
      Descripation:
        'ENOUGH STORAGE : With 6 pencil slots and a spacious main compartment, our pencil case has a large capacity of storage, perfect for keeping all your stationery beautifully organized. Comes with a clear mesh pocket that is perfect for organizing small items',
      Img: '/product27.jpg',
      Quantity: 50,
    },
    {
      Id: 28,
      Name: 'Face Razor ',
      Price: 493,
      OfferPrice: 292,
      Rating: 1.8,
      RatingCount: 166,
      CategoryId: 1,
      Descripation:
        'Earth Rhythm Razor is made with stainless steel, it is a painless solution to unwanted hair. It includes a micro guard that prevents nicks and cuts for a smooth finish. With an anti-slip grip, it keeps your skin safe.',
      Img: '/product28.jpg',
      Quantity: 27,
    },
    {
      Id: 29,
      Name: 'Slim Straight Fit Jeans',
      Price: 2795,
      OfferPrice: 1174,
      Rating: 3.7,
      RatingCount: 490,
      CategoryId: 2,
      Descripation: 'Slim Straight Fit',
      Img: '/product29.jpg',
      Quantity: 31,
    },
    {
      Id: 30,
      Name: 'Fold-able Side Table',
      Price: 1923,
      OfferPrice: 1089,
      Rating: 2.2,
      RatingCount: 316,
      CategoryId: 3,
      Descripation:
        'Antique Foldable table, easy to carry anywhere. A perfect gift item for you.<',
      Img: '/product30.jpg',
      Quantity: 72,
    },
    {
      Id: 31,
      Name: 'Coca-Cola, 750ml',
      Price: 37,
      OfferPrice: 15,
      Rating: 3.2,
      RatingCount: 203,
      CategoryId: 4,
      Descripation:
        'Created in 1886 in Atlanta, Georgia the great taste of Coca-Cola is now available and sold in more than 200 countries;It is refreshing;The unique taste of Coca-Cola refreshes you and uplifts the senses',
      Img: '/product31.jpg',
      Quantity: 80,
    },
    {
      Id: 32,
      Name: 'Monochrome Printer',
      Price: 1757,
      OfferPrice: 1285,
      Rating: 1.3,
      RatingCount: 271,
      CategoryId: 5,
      Descripation:
        'Single function laser printer with DUPLEX. Fast and high definition printing up to 33ppm(A4) in black and white. Support multiple media sizes.',
      Img: '/product32.jpg',
      Quantity: 26,
    },
    {
      Id: 33,
      Name: 'Dual Tip Markers ',
      Price: 1932,
      OfferPrice: 646,
      Rating: 4.9,
      RatingCount: 346,
      CategoryId: 9,
      Descripation:
        'DUAL BRUSH COLORING MARKERS: Dual tip markers feature both a fine tip and chisel tip which will bring much more fun to your art projects.You can create ultra fine line by 1 mm hard tip,and fine ,medium or bold strokes by a change in brush pressure.',
      Img: '/product33.jpg',
      Quantity: 93,
    },
    {
      Id: 34,
      Name: ' Foldable Design Mobile Stand',
      Price: 2214,
      OfferPrice: 1733,
      Rating: 3.5,
      RatingCount: 267,
      CategoryId: 6,
      Descripation:
        '360-Degree Rotating Stand: Enjoy complete freedom with a desktop stand that rotates a full 360 degrees.',
      Img: '/product34.jpg',
      Quantity: 58,
    },
    {
      Id: 35,
      Name: 'World Volleyball',
      Price: 495,
      OfferPrice: 299,
      Rating: 1.5,
      RatingCount: 489,
      CategoryId: 7,
      Descripation: '',
      Img: '/product35.jpg',
      Quantity: 85,
    },
    {
      Id: 36,
      Name: 'Storio Toy Octopus',
      Price: 2803,
      OfferPrice: 1342,
      Rating: 2.1,
      RatingCount: 352,
      CategoryId: 8,
      Descripation:
        'Mini Sized Reversible Octopus Plush - Are you looking for the mini sized plush soft toys for your kids ? Our Reversible Octopus Plush Soft Toy comes with a perfect size for baby kids (Age- from 6 months and up ). It comes with the size of 12 cm which is very comfortable for small kids to play and enjoy with it',
      Img: '/product36.jpg',
      Quantity: 70,
    },
    {
      Id: 37,
      Name: 'Sunscreen Stick SPF 60',
      Price: 2613,
      OfferPrice: 1922,
      Rating: 3.9,
      RatingCount: 138,
      CategoryId: 1,
      Descripation:
        'Aqua Surge Sunstick SPF 60 feels light as a feather on the skin. It is travel-friendly, easy to apply, and fits right into your pocket!',
      Img: '/product37.jpg',
      Quantity: 95,
    },
    {
      Id: 38,
      Name: 'Men Regular Fit Solid Casual Collar Shirt',
      Price: 4575,
      OfferPrice: 2999,
      Rating: 4.8,
      RatingCount: 247,
      CategoryId: 2,
      Descripation:
        'Modern Fit, Size chart - S-38, M-40, L-42, XL-44, XXL-46 3XL-48',
      Img: '/product38.jpg',
      Quantity: 62,
    },
    {
      Id: 39,
      Name: 'Orthopedic Wedge Pillow',
      Price: 3383,
      OfferPrice: 1325,
      Rating: 3.0,
      RatingCount: 89,
      CategoryId: 3,
      Descripation:
        'Multi-Purpose: Useful in providing relief in conditions like acid reflux, back or neck pain, sciatica, heartburns, GERD, snoring, coughing, post surgery ailments',
      Img: '/product39.jpg',
      Quantity: 40,
    },
    {
      Id: 40,
      Name: 'Cheesy Nuggets',
      Price: 149,
      OfferPrice: 95,
      Rating: 1.7,
      RatingCount: 261,
      CategoryId: 4,
      Descripation:
        'These are delicious snacks that are hot and crisp on the outside yet have a soft, melting cheese filling with a flavourful hit of red chili flakes',
      Img: '/product40.jpg',
      Quantity: 13,
    },
    {
      Id: 41,
      Name: ' Portable Keyboard',
      Price: 3685,
      OfferPrice: 1981,
      Rating: 2.5,
      RatingCount: 175,
      CategoryId: 5,
      Descripation:
        'Compatible with Casio’s Mobile Application “Casio Music Space” which helps you learn all your favourite songs. Just download and import the MIDI file into the app & connect your phone to the Keyboard with an USB Cable. Chordana Play makes learning fun & easy.',
      Img: '/product41.jpg',
      Quantity: 57,
    },
    {
      Id: 42,
      Name: 'Travel Adaptor',
      Price: 345,
      OfferPrice: 199,
      Rating: 4.0,
      RatingCount: 393,
      CategoryId: 6,
      Descripation:
        'POWERFULLY REFINED - 25W Super Fast Charging with Type C support',
      Img: '/product42.jpg',
      Quantity: 83,
    },
    {
      Id: 43,
      Name: 'Badminton Racquet',
      Price: 4610,
      OfferPrice: 2605,
      Rating: 3.4,
      RatingCount: 104,
      CategoryId: 7,
      Descripation: 'YONEX BADMINTON RACQUET ASTROX ATTACK 9 PEARL WHITE G4 4U',
      Img: '/product43.jpg',
      Quantity: 19,
    },
    {
      Id: 44,
      Name: 'Barbie® Doll',
      Price: 467,
      OfferPrice: 199,
      Rating: 2.6,
      RatingCount: 307,
      CategoryId: 8,
      Descripation:
        '​Stars dazzle in the night sky, and Barbie dazzles in her sequined look! These Barbie dolls capture the ultimate in modern style with trendy mini dresses and accessories.',
      Img: '/product44.jpg',
      Quantity: 90,
    },
    {
      Id: 45,
      Name: 'Pen Stand',
      Price: 2073,
      OfferPrice: 1716,
      Rating: 4.6,
      RatingCount: 283,
      CategoryId: 9,
      Descripation:
        'The three sections of display can be moved and turned around to display every combination of every date in the year. As there are no years printed, this calendar can be used year upon year so is a very long lasting item to use. ? Perfect too for use in a cafe, restaurant or canteen as a decorative piece to help customers and staff with the date.',
      Img: '/product45.jpg',
      Quantity: 76,
    },
  ];
  AddToWishlist(product: Product) {
    if (this.Wishlist.includes(product)) {
      this.Wishlist.splice(
        this.Wishlist.findIndex((x) => x.Id == product.Id),
        1
      );
    } else {
      this.Wishlist.push(product);
    }
    this.WishlistCount.set(this.Wishlist.length);
    this.SaveCartLocalStorage();
  }

  AddToCart(Id: number, Quantity: number) {
    let index = this.Cart.findIndex((x) => x.ProductId == Id);
    if (index > -1) {
      this.Cart[index].Quantity += Quantity;
      if (this.Cart[index].Quantity == 0) {
        this.RemoveItem(Id);
      }
    } else {
      let cart: Cart = {
        ProductId: Id,
        Quantity: Quantity,
      };
      this.Cart.push(cart);
    }
    this.CartCount.set(this.Cart.length);
    this.GetCartItem();
    this.SaveCartLocalStorage();
    this.GetCartTotal();
  }
  GetCartProduct(id: number) {
    let item = this.Cart.find((x) => x.ProductId == id);
    return item?.Quantity;
  }
  GetCategoryName(id: number) {
    let item = this.Categories.find((x) => x.Id == id);
    return item?.Name;
  }
  GetCartItem() {
    this.CartProduct = [];
    this.Cart.forEach((element) => {
      let item = this.Products.find((x) => x.Id == element.ProductId);
      if (item) {
        this.CartProduct.push(item);
      }
    });
  }
  RemoveItem(id: number) {
    let index = this.Cart.findIndex((x) => x.ProductId == id);
    this.Cart.splice(index, 1);
    this.CartCount.set(this.Cart.length);
    this.GetCartItem();
    this.SaveCartLocalStorage();
    this.GetCartTotal();
  }
  GetProductSubTotal(id: number) {
    let CategoryItem = this.Cart.find((x) => x.ProductId == id);
    let ProductItem = this.Products.find((x) => x.Id == id);
    return CategoryItem == undefined || ProductItem == undefined
      ? 0
      : CategoryItem?.Quantity * ProductItem?.OfferPrice;
  }
  SaveCartLocalStorage() {
    let data = JSON.stringify(this.Cart);
    let wishlist = JSON.stringify(this.Wishlist);
    localStorage.setItem('Cart', data);
    localStorage.setItem('Wish', wishlist);
  }
  GetSavedData() {
    let res = localStorage.getItem('Cart');
    let data: Cart[] = res ? JSON.parse(res) : [];
    return data;
  }
  GetWishListData() {
    let res = localStorage.getItem('Wish');
    let data: Product[] = res ? JSON.parse(res) : [];
    return data;
  }
  GetCartTotal() {
    let subtotal = 0;
    let total = 0;
    this.CartProduct.forEach((item) => {
      var quantity = this.Cart.find((x) => x.ProductId == item.Id)?.Quantity;
      subtotal += quantity == null ? 0 : quantity * item.OfferPrice;
      total += quantity == null ? 0 : quantity * item.Price;
    });
    this.SubTotal.set(subtotal);
    this.Discount.set(total - subtotal);
    this.Delivery.set((subtotal * 5) / 100);
    this.Taxs.set((subtotal * 18) / 100);
    this.Total.set(this.SubTotal() + this.Taxs() + this.Delivery());
  }
  IFCart(id: number) {
    var isCart = this.Cart.findIndex((x) => x.ProductId == id);
    return isCart == -1 ? false : true;
  }
  AvailableInWishlist(id: number) {
    return this.Wishlist.findIndex((x) => x.Id == id) == -1 ? false : true;
  }
  RemoveItemWish(id: number) {
    this.Wishlist.splice(
      this.Wishlist.findIndex((x) => x.Id == id),
      1
    );
    this.WishlistCount.set(this.Wishlist.length);
    this.SaveCartLocalStorage();
  }
}
