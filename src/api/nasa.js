import axios from "axios";

const KEY = "m7Ld8oj3sWT9mNK5iTJNdgm2bZQtC9lcJQQjt7V5";

export default axios.create({
  baseURL: "https://api.nasa.gov",
  params: {
    api_key: KEY,
  },
});
