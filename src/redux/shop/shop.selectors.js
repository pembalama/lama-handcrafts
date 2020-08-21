import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => {
	return shop.collections;
});

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => {
		return Object.keys(collections).map(key => {
			return collections[key];
		});
	}
);

//implementing curried function--> function returning another function; also using lodash.memoize to utilize memoization for the selector function that is being returned
export const selectCollection = memoize(collectionUrlParam => {
	return createSelector([selectCollections], collections => {
		return collections[collectionUrlParam];
	});
});
