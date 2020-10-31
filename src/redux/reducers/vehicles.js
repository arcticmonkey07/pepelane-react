const initialState = {
  vehicles: [],
  isLoaded: false,
  types: ['whatever', 'airship', 'rocket', 'helicopter', 'plane', 'custom'],
};

const vehicles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VEHICLES':
      return {
        ...state,
        vehicles: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default vehicles;
