import { useMemo, useState } from "react";

const getPublicAssetPath = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, "")}`;

export default function PublicImage({ src, fallbackSrc = "/renan-profile.jpg", alt, ...props }) {
  const primarySrc = useMemo(() => getPublicAssetPath(src), [src]);
  const fallback = useMemo(() => getPublicAssetPath(fallbackSrc), [fallbackSrc]);
  const [currentSrc, setCurrentSrc] = useState(primarySrc);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
