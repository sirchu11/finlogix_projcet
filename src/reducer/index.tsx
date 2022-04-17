export const initState = {
  showHeader: true,
};

export default (state: any, action: any) => {
  switch (action.type) {
    case 'SHOW_HEADER':
      return { ...state, showHeader: action.payload };
    default:
      return state;
  }
};
