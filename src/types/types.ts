export interface FetchedImagesType {
  id: string;
  urls: {
    regular: string;
  };
  likes: number;
  user: {
    name: string;
  };
}
