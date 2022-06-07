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
  wishList: ['9781250278197', '123456'],

  addToWishList: isbn => {
    console.log(isbn);
  },
}));

export default useStore;
