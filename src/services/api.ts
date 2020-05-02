import axios from "axios";

// Setting our API address with axios
// to the loalhost using port 3333
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
