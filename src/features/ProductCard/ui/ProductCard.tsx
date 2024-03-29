import React from 'react';

import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../entities/Product";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

interface IProductCardProps {
    item: IProduct
    withFavorite: React.ReactElement
}

const ProductCard = (props: IProductCardProps) => {
    const { item, withFavorite } = props;

    return (
        <AppLink 
            to={`/product_details/${item.id}`}
            className={cls.ProductCard}
        >
            <div className={cls.header}>
                <span>{item.title}</span>
                {withFavorite && withFavorite}
            </div>

            <span className={cls.description}>{item.description}</span>
            <div className={cls.footer}>
                <span className={cls.price}>{item.price}</span>
                <span className={cls.oldPrice}>{item.oldPrice}</span>
            </div>
        </AppLink>
    );
};

export default ProductCard;