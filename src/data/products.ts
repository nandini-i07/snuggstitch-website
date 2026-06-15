export interface Product {
  id: string
  name: string
  price: number
  category: 'keychains' | 'bouquets' | 'hair-accessories' | 'custom'
  images: string[]
  description: string
  shortDescription: string
  emoji: string
}

const products: Product[] = [

  {
    id: 'spiderman-keychain',
    name: 'Hanging Spiderman Keychain',
    price: 249,
    category: 'keychains',
    images: [
      "/images/spiderman.png",
      "/images/spiderman2.png",
  
    ],
    shortDescription: '',
    description:
      'It features the iconic red and blue colours with detailed white eye patches . The charm includes a white hanging cord, making it suitable for backpacks .',
    emoji: '🕸️',
  },
  {
    id: 'bunny-keychain',
    name: 'Bunny Keychain',
    price: 249,
    category: 'keychains',
    images: [
      "/images/bunny2.png",
      "/images/bunny.png",
      "/images/bunny3.png"
    ],
    shortDescription: '',
    description:
      'Our classic crochet bunny keychain is a fan favourite. Lightweight, fluffy, and made with care. A perfect everyday companion for your keys or bags. Customise colour on request.',
    emoji: '🐰',
  },

  {
    id: 'roll-keychain',
    name: 'Swiss roll Keychain',
    price: 99,
    category: 'keychains',
    images: [
      "/images/swissroll.png",
    ],
    shortDescription: '',
    description:'',
    emoji: '🍥',
  },


  {
    id: 'Chill-keychain',
    name: 'Chill Bunny Keychain',
    price: 299,
    category: 'keychains',
    images: [
      "/images/Chill Bunny .png",
      "/images/chill bunny 2.png",
      "/images/chill bunny 3.png",
    ],
    shortDescription: '',
    description:
      'It is designed as a miniature keychain charm . perfect for attaching to bag or keys.',
    emoji: '🎧',
  },


  {
    id: 'Shield-keychain',
    name: 'Shield Keychain',
    price: 69,
    category: 'keychains',
    images: [
      "/images/shield2.png",
      "/images/shield.png",
        ],
    shortDescription: '',
    description:
      'This handmade accessory replicates captain americas iconic shield using vibrant red, white ,and blue yarn stitched around a central star, It comes with attached to a sturdy silver metal keyring .',
    emoji: '🕸️',
  },
  
  

  {
    id: 'lily-keychain',
    name: 'Lily Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/lilykeychain.png",
    ],
    shortDescription: '',
    description:
      'This pretty keychain is made of premium wool yarn in pink color with a metal keychain.',
    emoji: '🌸',
  },

  
  
  {
    id: 'sunflower-keychain',
    name: 'Sunflower Keychain',
    price: 69,
    category: 'keychains',
    images: [
      "/images/sunflower.png",
    ],
    shortDescription: '',
    description:
      'Our classic crochet sunflower keychain would make your every bag look very pretty . we gaurantee with love',
    emoji: '🌻',
  },


  {
    id: 'pokeball-keychain',
    name: 'Crochet Pokeball Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/pokeball.png",
      "/images/pokeball2.png",
      "/images/pokeball3.png",
      "/images/pokeball4.png"
    ],
    shortDescription: '',
    description:
      'It is designed to be small , stuffed charm for backpacks , bags ,or keys .',
    emoji: '❤️🤍',
  },
  
  {
    id: 'morpankh-keychain',
    name: 'Crochet Morpankh Keychain',
    price: 179,
    category: 'keychains',
    images: [
      "/images/morpankh.png",
      "/images/morpankh2.png",
      "/images/morpankh3.png"


    ],
    shortDescription: '',
    description: 'It featured vibrant , concentric circles of yarn in green , blue and yellow to mimic the feathers appearance .',
    emoji: '🦚',
  },


  
  {
    id: 'sunflower2-keychain',
    name: 'Sunflower with leaves Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/sunflowerleaves.png",
    ],
    shortDescription: '',
    description:
      'Our classic crochet sunflower keychain would make your every bag look very pretty . we gaurantee with love ',
    emoji: '🌻',
  },
  
  
  
  


  


  {
    id: 'whitebunny-keychain',
    name: ' Bunny Keychain (with a free accessory)',
    price: 399,
    category: 'keychains',
    images: [
      "/images/whitebunny1.png",
      "/images/whitebunny2.png",
    ],
    shortDescription: '',
    description:
      'Our classic crochet bunny keychain is a fan favourite. Lightweight, fluffy, and made with care. A perfect everyday companion for your keys or bags. Customise colour on request.',
    emoji: '🐰',
  },

{
    id: 'daisy-keychain',
    name: 'Daisy Bouquet Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/daisy.png",
      "/images/daisy2.png"
    ],
    shortDescription: '',
    description:
      'Crafted from soft yarn with a metal key ring attachment Featured white peatals with a yellow center, arranged like a small bouquet.',
    emoji: '🌼',
  },
  
  
  
  {
    id: 'miffy-keychain',
    name: 'Miffy Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/miffy.png",
    ],
    shortDescription: '',
    description:
      'This is a handmadecrochet keychain inspired by the character Miffy. It is crafted using the amigurmi technique , resulting in a 3d white bunny shape .',
    emoji: '🐰',
  },

  
  {
    id: 'watermelon-keychain',
    name: 'Watermelon Keychain',
    price: 119,
    category: 'keychains',
    images: [
      "/images/wahtermelon.png",
    ],
    shortDescription: '',
    description:
      'Likely crafted from soft cotton with a sturdy metal ring . ',
    emoji: '🍉',
  },
  
  {
    id: 'hat-keychain',
    name: 'CowBoy Hat Keychain',
    price: 149,
    category: 'keychains',
    images: [
      "/images/hat.png",
      "/images/hat2.png"

    ],
    shortDescription: '',
    description:
      'Our classic crochet sunflower keychain would make your every bag look very pretty . we gaurantee with love ',
    emoji: '🌻',
  },
  
  
  
  
  


  //Hair ACCESSORIES 


  {
    id: '1',
    name: 'Angry Emotion Hair Clip',
    price: 99,
    category: 'hair-accessories',
    images: [
      "/images/angry.png"
    ],
    shortDescription: '',
    description:
      'This is a handmade red and black angry crochet hair clip.',
    emoji: '🎀',
  },
  {
    id: '5',
    name: 'Bow Hair Clip',
    price: 99,
    category: 'hair-accessories',
    images: [
      "/images/bowhairclip.png"
    ],
    shortDescription: '',
    description:
      'They are designed as appliques, suitable for attaching to hair clips, accessories, or other crafts.',
    emoji: '🎀',
  },

  {
    id: '4',
    name: 'Beige Tulip Hair Clip',
    price: 119,
    category: 'hair-accessories',
    images: [
      "/images/beigehairclip.png"
    ],
    shortDescription: '',
    description:
      'These charming handmade hair clips feature a detailed tulip design crafted with crochet yarn.Each piece is securely mounted on a sturdy metal clip for functional daily use.',
    emoji: '🌷',
  },

  {
    id: '7',
    name: ' Bow Clip',
    price: 149,
    category: 'hair-accessories',
    images: [
      "/images/ribbon2.png",
      "/images/ribbon.png"

    ],
    shortDescription: '',
    description:
      'Prettiest Bow Hairclip in beautiful red color .',
    emoji: '🌷',
  },
  {
    id: '2',
    name: 'Crochet Scrunchie',
    price: 149,
    category: 'hair-accessories',
    images: [
      "/images/scrunchie.png",
      "/images/scrunchie2.png"

      
    ],
    shortDescription: '',
    description:
      'This cream and brown handmade crochet scrunchie is a soft, stylish hair accessory perfect for cozy hairstyles  .Features a cream-colored body with a contrasting dark brown edge.',
    emoji: '🤍',
  },

  {
    id: '8',
    name: 'Red Headband',
    price: 99,
    category: 'hair-accessories',
    images: [
      "/images/headbandred.png",
      "/images/headbandred2.png",

    ],
    shortDescription: '',
    description:
      'Ped headband',
    emoji: '🎀',
  },
  
  {
    id: '3',
    name: 'Beige handmade crochet headband',
    price: 119,
    category: 'hair-accessories',
    images: [
      "/images/headband.png",
      "/images/headband2.png"

    ],
    shortDescription: '',
    description:
      'This peach-colored, handmade crochet headband is crafted from soft material for comfortable, all-day wear.',
    emoji: '🤍',
  },
  
  
  
  
  
  {
    id: '6',
    name: ' Tulip Hair Clip',
    price: 149,
    category: 'hair-accessories',
    images: [
      "/images/hairclip.png"
    ],
    shortDescription: '',
    description:
      'These handmade crochet tulip hair clips feature delicate, embroidered yellow flowers set against neutral and blue backdrops.',
    emoji: '🌷',
  },
  


  //BouQUETS 



  {
    id: 'AA',
    name: 'Crochet Lily Flower Stick',
    price: 349,
    category: 'bouquets',
    images: [
      '/images/lily.png',
      '/images/lily2.png'

    ],
    shortDescription: 'Everlasting crochet lily flower .',
    description:
      'This is a handmade white crochet lily flower, often crafted from 100% cotton yarn.The flower features intricate green leaves, a stem, and detailed stamens, making it a popular choice for home decor or gifting.',
    emoji: '🌸',
  },



  //custom


  {
    id: 'AA',
    name: 'Crochet Lily Flower Stick',
    price: 349,
    category: 'custom',
    images: [
      '/images/lily.png',
      '/images/lily2.png'

    ],
    shortDescription: 'Everlasting crochet lily flower .',
    description:
      'This is a handmade white crochet lily flower, often crafted from 100% cotton yarn.The flower features intricate green leaves, a stem, and detailed stamens, making it a popular choice for home decor or gifting.',
    emoji: '🌸',
  },
  {
    id: 'B',
    name: 'Pink Crochet Drawstring Pouch',
    price: 149,
    category: 'custom',
    images: [
      '/images/pouch.png',
      '/images/pouch2.png'

    ],
    shortDescription: '',
    description:
      'This is a handmade pink crochet drawstring pouch, often referred to as a "potli" bag, used for small items. It features a distinctive textured red detail on the front and white drawstring ties.These are commonly used for coin storage, gifting, or as party favors.',
    emoji: '👝',
  },
  {
    id: 'C',
    name: 'Grey crochet rat bookmark',
    price: 199,
    category: 'custom',
    images: [
      '/images/rat.png',
      '/images/rat2.png'

    ],
    shortDescription: '',
    description:
      'This handmade crochet rat bookmark features grey yarn for the body and pink accents on the ears and feet.',
    emoji: '🐀',
  }
  
]

export default products

export const getProductsByCategory = (category: Product['category']) =>
  products.filter((p) => p.category === category)

export const getProductById = (id: string) => products.find((p) => p.id === id)

export const categories = [
  {
    id: 'keychains',
    label: 'Keychains',
    emoji: '❤️',
    image: '/images/spiderman.png',
    href: '/keychains',
    description: 'Cute handcrafted crochet keychains',
  },
  {
    id: 'bouquets',
    label: 'Bouquets',
    emoji: '💐',
    image: '/images/lily.png',
    href: '/bouquets',
    description: 'Flowers that never wilt, memories that never fade.',
  },
  {
    id: 'hair-accessories',
    label: 'Hair Accessories',
    emoji: '🎀',
    image: '/images/bowhairclip.png',
    href: '/hair-accessories',
    description: 'Clips, scrunchies & more',
  },
  {
    id: 'custom',
    label: 'Custom Orders',
    emoji: '✨',
    image: '/images/rat.png',
    href: '/custom',
    description: 'Made exactly how you imagine it',
  },
]
