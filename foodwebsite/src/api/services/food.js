import { http } from '../http'
import { ENDPOINTS } from '../constants';

export const getFoodCategories = () => {
    return http.get(ENDPOINTS.FOOD_CATEGORIES)
}

export const filterFoodItems = (category) => {
    return http.get(`${ENDPOINTS.FILTER_FOOD_ITEM}?c=${category}`)
}
