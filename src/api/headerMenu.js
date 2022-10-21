import api from "./api";

const endPoints = {
  menu: "wp-json/v1/parent/category/posts/main-menu",
};

export function getHeaderMenu(){
  return api.get(endPoints.menu);
}