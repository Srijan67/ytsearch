import { useEffect, useState } from "react";
import "./homeStyle.css";
import { GetVideosAction } from "../action";
import DisplayResult from "./DisplayResult";
const HomeComp = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const GetVideosData = async () => {
    let { items } = await GetVideosAction();
    setAllVideos(items);
  };
  useEffect(() => {
    GetVideosData();
  }, []);
  return (
    <>
      <div className="HomeComp">
        <div class="flex justify-center bg-gray-400">
          <div class="xl:w-96 mt-4">
            <div class="input-group relative flex  w-full mb-4 rounded items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
              <input
                type="search"
                class="ml-2 form-control relative md:w-96 flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
          </div>
        </div>
        <div className="result">
          {allVideos
            .filter((val) => {
              if (searchText === "" || searchText.length <= 1) {
                return val;
              } else if (
                val.snippet.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, index) => {
              return <DisplayResult key={index} {...val} />;
            })}
        </div>
      </div>
    </>
  );
};
export default HomeComp;
