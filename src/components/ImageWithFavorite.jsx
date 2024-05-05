import { createSignal } from "solid-js";

const ImageWithFavorite = (props) => {
  const [isFavorited, setIsFavorited] = createSignal(props.isFavorited);

  const toggleFavorite = () => {
    console.log('FAVORITE');
    setIsFavorited(!isFavorited());
  };

  return (
    <div class="m-8 border-2 border-blue-500 p-8">
      <img src={props.src} alt={props.alt} />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleFavorite}>
        {isFavorited() ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default ImageWithFavorite;
