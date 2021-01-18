import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shop-selectors'; 
import WithSpinner from '../with-spinner/with-spinner.components';

import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;