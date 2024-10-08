import { create } from "zustand";
import { ISearchParams } from "~/types/searchParam";

const useSearchParamsStore = create<ISearchParams>((set) => ({
    language: 'typescript',
    page: 1,
    setLanguage: (language) => set({ language }),
    setPage: (page) => set({ page }),
  }));
  
  export default useSearchParamsStore;