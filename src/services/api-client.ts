import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf2d673056f44569bc2eec43a8429faa",
  },
});
