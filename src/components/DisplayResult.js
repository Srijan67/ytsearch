const DisplayResult = (props) => {
  return (
    <>
      <div className="cursor-pointer mb-8 bg-gray-700 rounded-lg pb-4 text-white">
        <img
          className="md:flex rounded-t-lg"
          srcSet={props.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <h1 className="w-11/12 m-auto pt-2 font-semibold">
          {props.snippet.title}
        </h1>
        <h1 className="opacity-60 w-11/12 m-auto leading-tight text-sm">
          {props.snippet.description}
        </h1>
      </div>
    </>
  );
};
export default DisplayResult;
