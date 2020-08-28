import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => {
	return shop.collections;
});

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => {
		return collections
			? Object.keys(collections).map(key => {
					return collections[key];
			  })
			: [];
	}
);

//implementing curried function--> function returning another function; also using lodash.memoize to utilize memoization for the selector function that is being returned
export const selectCollection = memoize(collectionUrlParam => {
	return createSelector([selectCollections], collections => {
		return collections ? collections[collectionUrlParam] : null;
	});
});

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
);
