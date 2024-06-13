export interface IPost {
  // author
  _id?: string;
  userName: string;
  userImage: string;

  // content
  pageContent: string;
  title: string;
  imageUrl: string;
  createdAt?: string;
  tag: string;
}
