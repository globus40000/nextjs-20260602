import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const MD = "(width >= 48rem)";
const LG = "(width >= 64rem)";

export function useSlider<T>(items: T[]) {
  const [pageSize, setPageSize] = useState<number | null>(null);

  useEffect(() => {
    const mediaMd = window.matchMedia(MD);
    const mediaLg = window.matchMedia(LG);

    const updatePageSize = () => {
      setPageSize(mediaLg.matches ? 3 : mediaMd.matches ? 2 : 1);
    };

    updatePageSize();

    mediaMd.addEventListener("change", updatePageSize);
    mediaLg.addEventListener("change", updatePageSize);

    return () => {
      mediaMd.removeEventListener("change", updatePageSize);
      mediaLg.removeEventListener("change", updatePageSize);
    };
  }, []);

  const pagesCount = pageSize ? Math.ceil(items.length / pageSize) : 0;

  const slides = useMemo(() => {
    return pageSize
      ? items.map((_, index) => ({
          page: Math.floor(index / pageSize),
          isObservable: index % pageSize === 0,
        }))
      : [];
  }, [items, pageSize]);

  const [activePage, setActivePage] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const dataPage = target.getAttribute("data-page");

            if (dataPage !== null) {
              setActivePage(parseInt(dataPage));
            }
          }
        });
      },
      { root: track, threshold: 0.6 },
    );

    slides.forEach(({ isObservable }, index) => {
      const slideElement = track.children[index];

      if (slideElement && isObservable) {
        observer.observe(slideElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [slides]);

  const scrollToPage = useCallback(
    (page: number) => {
      const track = trackRef.current;

      if (!track || !pageSize) {
        return;
      }

      const targetIndex = page * pageSize;
      const targetElement = track.children[targetIndex];

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    },
    [pageSize],
  );

  return { scrollToPage, activePage, pagesCount, slides, trackRef };
}
