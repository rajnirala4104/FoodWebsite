import { http } from '../http'
import { ENDPOINTS } from '../constants';

export const getFoodCategories = () => {
    return http.get(ENDPOINTS.FOOD_CATEGORIES)
}

export const filterFoodItems = (category) => {
    return http.get(`${ENDPOINTS.FILTER_FOOD_ITEM}?c=${category}`)
}

export const getFoodDataByNameOrBySearch = (foodName) => {
    return http.get(`${ENDPOINTS.BY_SEARCH}?s=${foodName}`)
}

export const getAreaList = ()=>{
    return http.get(`${ENDPOINTS.AREA_LIST}`)
}

export const getFoodItemByAreName = (areaKaNaam)=>{
    return http.get(`${ENDPOINTS.FILTER_FOOD_ITEM}?a=${areaKaNaam}`)
}
