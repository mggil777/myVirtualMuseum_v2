export type ArtDetailsPositionProps = {
  id: number;
  title: string | null;
  imageId: string | null;
  thumbnail?: {
    width: number | null;
    height: number | null;
  };
  description: string | null;
  author: string | null;
  placeOfOrigin: string | null;
  date: number | null;
  artworkType: string | null;
  dimensions: string | null;
  artistId: number | null;
  publicDomain: boolean | null;
  onView: boolean | null;
};
