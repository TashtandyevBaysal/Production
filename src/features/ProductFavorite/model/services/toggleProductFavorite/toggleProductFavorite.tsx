import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../../../../entities/Product";

const toggleProductFavorite = createAsyncThunk<
    IProduct,
    number,
    ThunkConfig<string>
>(
    "product/toggleProductFavorite",
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            // const response = extra.api.put()

            return {} as any;
            // eslint-disable-next-line no-unreachable
        } catch (error) {
            return rejectWithValue("Error");
        }
    }
);