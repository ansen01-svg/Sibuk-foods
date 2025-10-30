export interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
  price?: number;
  category?: string;
}

export interface ProductsSectionProps {
  products?: Product[];
  showRewardsCard?: boolean;
}
