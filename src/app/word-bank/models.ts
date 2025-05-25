export interface Category {
  category_id: number;
  category_name: string;
  cards_count: number;
}
export interface Card {
  category_id: number;
  card_id: number;
  word: string;
  definition: string;
}
