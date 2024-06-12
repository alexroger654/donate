export interface IGiftCardTemplate {
  _id: string;
  gift_card_name: string;
  gift_card_id: string;
  gift_card_amount: string;
  category: string;
  createdAt: string;
  image_url?: string;
  description?: string;
}
