export type ProductType = {
  id?: string;
  title: string;
  price: string;
  thumbnail: string;
  previews: string[];
  slug?: string;
  desc?: string;
  brand?: string;
  createdAt?: string;
  currency?: string;
  detail?: string;
  rating?: string;
  tags?: {
    id: string;
    titleEn: string;
    titleKh: string;
  };
  variants?: {
    id: string;
    label: string;
    price: string;
    preview: string;
    option: string;
    available: string;
  };
};
