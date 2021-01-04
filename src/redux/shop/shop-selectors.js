import { createSelector } from 'reselect';

// map collectionId to id number of collections
/*
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
*/
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])

)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );

/*
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )
*/