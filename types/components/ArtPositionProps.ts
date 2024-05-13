export type ArtPositionProps = {
  id: number;
  title: string;
  imageId: string;
  thumbnail: {
    width: number | null | undefined;
    height: number | null | undefined;
  };
  artistTitle?: string | null;
  is_public_domain?: boolean;
  is_on_view?: boolean;
};
