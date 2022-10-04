import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const KEY =
//   '&key=29649041-262fdf0daa2a4569f2631b8dd&image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '03c36c8f9fb27db2b71a5071437967b0',
};

// const axiosSearch = async (name, pageNumber) => {
//   try {
//     const {
//       data: { hits, total },
//     } = await axios.get(`?q=${name}&page=${pageNumber}${KEY}`);
//     return { hits, total };
//   } catch (error) {
//     return alert('Error', error);
//   }
// };

// export default axiosSearch;

export async function getTrendingMedia() {
  const { data } = await axios.get(`trending/all/week`);
  const moviesList = data.results;
  //   console.log(moviesList);
  return moviesList;
}
