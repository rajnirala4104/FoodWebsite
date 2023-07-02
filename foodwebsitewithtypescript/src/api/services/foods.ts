import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getFoodCategories = ()=>{
    return http.get(ENDPOINTS.FOOD_CATEGORIES)
}

export const getFilteredFoodsItems = (category:string | undefined) =>{
    return http.get(`${ENDPOINTS.FILTER_FOOD_ITEM}?c=${category}`)
}

export const getFoodBySearch = (foodName:string) => {
    return http.get(`${ENDPOINTS.BY_SEARCH}?s=${foodName}`)
}


