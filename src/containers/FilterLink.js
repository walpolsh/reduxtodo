import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

//dispatch() Dispatches an action. This is the only way to trigger a state change.

/*

action (Object†): A plain object describing the change that makes sense for your application.
Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.
Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module.
It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you.
*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

//FilterLink gets the current visibility filter and renders a Link.
// filter: string is the visibility filter it represents.

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
