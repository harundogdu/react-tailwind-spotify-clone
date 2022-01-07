import React, { useRef } from "react";
import Title from "components/Title";
import ScrollContainer from "react-indiana-drag-scroll";
import { Icon } from "assets/icons/Icon";

const Category = ({ categories }) => {
  return (
    <>
      <Title title={"Hepsine göz at"} size={"2xl"} />
      <section className="grid grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <a
            key={category.id}
            href="!#"
            className="border-none rounded-lg w-full relative after:block after:pb-[100%] tracking-tighter overflow-hidden shadow-spotify"
            style={{ backgroundColor: category.color }}
          >
            <div>
              <img
                src={category.cover}
                alt={category.title}
                className="absolute right-0 bottom-0 object-cover rotate-[25deg] w-[6.25rem] h-[6.25rem] translate-x-[18%] translate-y-[4%] shadow-spotify"
              />
              <h3 className="text-2xl max-w-full absolute p-4 font-bold">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

const FavouritesCategories = ({ categories }) => {
  const favouriteRef = useRef();
  const [prev, setPrev] = React.useState(false);
  const [next, setNext] = React.useState(true);

  const slideNext = () => {
    if (next) {
      favouriteRef.current.scrollLeft += favouriteRef.current.offsetWidth - 600;
    }
  };
  const slidePrev = () => {
    if (prev) {
      favouriteRef.current.scrollLeft -= favouriteRef.current.offsetWidth - 600;
    }
  };

  React.useEffect(() => {
    const current = favouriteRef.current;

    if (current) {
      const scrollHandle = () => {
        const isEnd =
          current.scrollLeft + current.offsetWidth + 10 >= current.scrollWidth;
        const isStart = current.scrollLeft <= 0;
        setPrev(!isStart);
        setNext(!isEnd);
      };
      current.addEventListener("scroll", scrollHandle);
    }
    return () => {
      current.removeEventListener("scroll", () => {});
    };
  }, [favouriteRef]);

  return (
    <div className="relative overflow-hidden transition-all">
      <>
        <Title title={"En çok dinlediğin türler"} size={"2xl"} />
        <ScrollContainer innerRef={favouriteRef} className="scroll-smooth">
          <section className="h-56 w-full relative mt-4">
            <div className="flex relative space-x-6 h-full w-full">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="!#"
                  className="flex flex-shrink-0 border-none rounded-lg  relative w-[24.2rem] h-full tracking-tighter overflow-hidden shadow-spotify"
                  style={{ backgroundColor: category.color }}
                >
                  <div>
                    <img
                      src={category.cover}
                      alt={category.title}
                      className="absolute right-0 bottom-0 object-cover rotate-[25deg] w-[8.5rem] h-[8.5rem] translate-x-[18%] translate-y-[4%] shadow-spotify"
                    />
                    <h3 className="text-4xl max-w-full absolute p-4 font-bold">
                      {category.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </ScrollContainer>
      </>
      {prev && (
        <button
          onClick={slidePrev}
          className="absolute top-[160px] left-2 -translate-y-1/2 bg-white rounded-full h-12 w-12 flex items-center justify-center hover:scale-105 transition-all"
        >
          <Icon name="prev" size={24} style={{ color: "black" }} />
        </button>
      )}
      {next && (
        <button
          onClick={slideNext}
          className="absolute top-[160px] right-2 z-50 -translate-y-1/2 bg-white rounded-full h-12 w-12 flex items-center justify-center hover:scale-105 transition-all"
        >
          <Icon name="next" size={24} style={{ color: "black" }} />
        </button>
      )}
    </div>
  );
};

export { Category, FavouritesCategories };
