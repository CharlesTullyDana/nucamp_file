import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (favorites, action) => {
            if (favorites.includes(action.payload)) {
                return favorites.filter(
                    (favorite) => favorite !== action.payload
                );
            } else {
                return [...favorites, action.payload]; // Return the updated array after pushing the new favorite
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
