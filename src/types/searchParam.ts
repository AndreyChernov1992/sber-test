import { TLanguage } from './languages'

export interface ISearchParams {
  language: TLanguage
  page: number
  setLanguage: (language: string) => void
  setPage: (page: number) => void
}
