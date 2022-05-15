export const GetVideosAction = async () => {
  try {
    const res = await fetch("/stage/video-list", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const item = await res.json();
    return item;
  } catch (error) {
    console.log(error);
  }
};
// export const loadVideo = () => {
//   type: "LOAD_VIDEO";
// };
