export interface Book {
  id: string;
  title: string;
  description: string;
  link?: string;
  coverUrl: string;
  price: string;
  slug?: string;
  isFeatured?: boolean;
}

export const booksData: Book[] = [
  {
    id: "survivors",
    title: "The Survivors",
    description: "A tale of family, faith, and the silent wars at home. A gripping drama of love, betrayal, and the unseen struggles within a broken home about child abandonment.",
    coverUrl: "https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-survivors-selar.com-68cee18849f88.jpg",
    price: "FREE",
    slug: "survivors",
    isFeatured: true
  },
  {
    id: "great-comfort-sex",
    title: "The Great Comfort of Sex",
    description: "Sex was meant to comfort, unite, and sanctify when aligned with God’s design. Unlocking the sacred power of soul-aligned intimacy.",
    link: "https://selar.com/0n57ln6475",
    coverUrl: "https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-great-comfort-of-sex--selar.com-68d2ea5a6fc68.jpg",
    price: "₦ 400"
  },
  {
    id: "foundation-of-reality",
    title: "The Foundation of Reality",
    description: "A Christ-centred exploration of the realities that govern existence, soul, and purpose. The significance of metaphysics.",
    link: "https://selar.com/30a1yu8133",
    coverUrl: "https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-foundation-of-reality-selar.com-68cecc4d6a910.jpg",
    price: "₦ 400"
  },
  {
    id: "moses-orimolade",
    title: "Moses Orimolade Tunolase",
    description: "Presents the extraordinary life of Moses Orimolade Tunolase, the revered founder of the Cherubim and Seraphim Church.",
    link: "https://selar.com/91591983r3",
    coverUrl: "https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/moses-orimolade-tunolse-t-selar.com-68ccda5f54315.jpg",
    price: "FREE"
  },
  {
    id: "secret-of-sex",
    title: "The Secret of Sex",
    description: "Unveiling the Hidden Power of Intimacy and Destiny. A truth that transforms pleasure into purpose.",
    link: "https://selar.com/7yrg",
    coverUrl: "https://files.selar.co/product-images/2025/products/%E1%BB%8Cm%E1%BB%8D_Olojo/the-secret-of-sex-selar.com-68d7e47ca8b2b.jpg",
    price: "₦ 249.99"
  }
];
