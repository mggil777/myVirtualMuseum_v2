//https://medium.com/simform-engineering/unit-testing-in-react-native-using-jest-9a30bcaf75ef
// https://medium.com/@anisurrahmanbup/react-native-testing-ultimate-guide-219a5e7ea5dc
const axios = require('axios');

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  // Add more properties if needed
}

const fetchPost = async (id: number): Promise<Post> => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return results.data;
};

module.exports = fetchPost;
