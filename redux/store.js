import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
////////// Import your favorites reducer
import { favoritesReducer } from '../features/favorites/favoritesSlice';
//////////



export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
////////// Add yor favorites reducer
// OLD CODE:        promotions: promotionsReducer
        promotions: promotionsReducer,
        favorites: favoritesReducer
//////////
    }

}); 