define([
  'constants',
  'lib/utils'
], ({ ACTION_TYPES: at }, { removeFromArrayByID }) => {

  return getInitialState => (state = getInitialState(), action = {}) => {
    switch (action.type) {
      case at.UPDATE_MEDIA_LIST:
        return {
          ...state,
          //list: removeFromArrayByID(state.list, action.item.id).concat([action.item]),
          list: action.list,
        };

      case at.FILTER:
        return {
          ...state,
          filter: action.filter,
        };

      case at.SORT:
        return {
          ...state,
          sortBy: action.sortBy,
          sortDirection: action.sortDirection,
        };

      case at.ADD_TO_WATCHLIST:
        const filteredWatchlist = removeFromArrayByID(state.watchlist || [], action.id);
        return {
          ...state,
          watchlist: filteredWatchlist.concat([{ id: action.id, date: action.date }]),
        };

      case at.REMOVE_FROM_WATCHLIST:
        return {
          ...state,
          watchlist: removeFromArrayByID(state.watchlist || [], action.id),
        };

      case at.SET_POLL_INTERVAL:
        return {
          ...state,
          pollingInterval: action.pollingInterval,
        };

      default:
        return state;
    }
  };
});
