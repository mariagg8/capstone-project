import create from 'zustand';

const useStore = create(set => ({
  fetchedData: { results: [] },
  fetchApi: async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ fetchedData: data });
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  },
  wishList: ['9781250278197', '123456', '9781501133572'],

  addToWishList: isbn => {
    set(state => {
      return {
        wishList: [isbn],
      };
    });
    //console.log(isbn);
  },
  deleteFromWishList: isbn => {
    //set((state) => {
    //return {
    // wishList: state.wishList.filter(isbn)
    // }
    // })
    console.log(isbn);
  },
}));

export default useStore;
