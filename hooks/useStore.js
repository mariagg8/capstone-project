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
}));

export default useStore;
