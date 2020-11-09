const savedMode = JSON.parse(localStorage.getItem('dark'));

const initialState = {
  vehicles: [],
  isLoaded: false,
  types: ['whatever', 'airship', 'rocket', 'helicopter', 'plane', 'custom'],
  isDark: savedMode,
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
    case 'SET_DARK':
      return {
        ...state,
        isDark: !action.payload,
      };
    default:
      return state;
  }
};

export default vehicles;
