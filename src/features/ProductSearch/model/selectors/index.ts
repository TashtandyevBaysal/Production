import { StateSchema } from "../../../../app/providers/StoreProvider";

const getProductSearchThem = (state: StateSchema) => state.productSearch.term;

export const productSearchSelectors = {
    getProductSearchThem
};