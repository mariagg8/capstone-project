import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => ({
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
            wishList: [...state.wishList, isbn],
          };
        });
        console.log(isbn);
      },
      deleteFromWishList: isbn => {
        set(state => {
          return {
            wishList: state.wishList.filter(item => item !== isbn),
          };
        });
        console.log(isbn);
      },
    }),
    {
      name: 'book-storage', // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;
