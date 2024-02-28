import { IProduct } from "../../../../entities/Product";

export const getProductInfoMappers = (product: IProduct) => {
    return [
        [
            "Цена",
            product.price
        ],
        [
            "Старая цена",
            product.oldPrice
        ],
        [
            "Категория",
            product.category

        ],
        [
            "Ватсапп/Телефон",
            "+996 706 426 220"
        ],
        
    ];
};