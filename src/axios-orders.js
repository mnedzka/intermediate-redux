import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-944be.firebaseio.com/"
});

export default instance;
