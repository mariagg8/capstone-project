import create from 'zustand';
import { persist } from 'zustand/middleware';

const urls = {
  fiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`,
  nonfiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`,
};
const useStore = create(
  persist(
    set => ({
      fetchedData: { results: [] },
      fetchApi: async category => {
        const url = urls[category];
        try {
          const response = await fetch(url);
          const data = await response.json();
          set({ fetchedData: data });
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      },
      setCategory: category => {
        set({ category });
      },
      category: 'fiction',

      wishList: ['9781250278197', '9781501133572'],

      addToWishList: isbn => {
        set(state => {
          return {
            wishList: [...state.wishList, isbn],
          };
        });
      },
      deleteFromWishList: isbn => {
        set(state => {
          return {
            wishList: state.wishList.filter(item => item !== isbn),
          };
        });
      },
    }),
    {
      name: 'book-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
