export type DataList = {
  name: string
  description: string
  url: string
}

export interface ISideNavbarElement {
  title: string
}

export interface ICategoryData {
  name: string
  description: string
}

export interface IDBData {
  name: string
  description: string
  url: string
  category: string
  subcategory: string
  language?: string
}

export interface IData {
  id: string
  name: string
  description: string
  url: string
  category: string
  subcategory: string
  language?: string
}

export type Category =
  | 'frontend'
  | 'backend'
  | 'languages'
  | 'artificial intelligence'
  | 'machine learning'
  | 'open source'
  | 'resources'
  | 'youtube'
  | 'other'

// export const SubCategory =
//   //frontend
//   | 'accessibility'
//   | 'animations'
//   | 'colors'
//   | 'design-inspiration'
//   | 'fonts'
//   | 'icons'
//   | 'illustrations'
//   | 'images'
//   | 'online-code-editors'
//   | 'react'
//   | 'themes-templates'
//   | 'ui-generators'
//   | 'videos'
//   //backend
//   | 'architecture'
//   | 'authentication'
//   | 'caching'
//   | 'database'
//   | 'security'
//   | 'system-design'
//   | 'testing'
//   | 'validation'
//   // languages
//   | 'c-programming'
//   | 'csharp'
//   | 'golang'
//   | 'java'
//   | 'javascript'
//   | 'kotlin'
//   | 'python'
//   | 'ruby'
//   | 'typescript'
//   //artificial intelligence
//   | 'artificial-intelligence'
//   // machin learning
//   | 'data-science'
//   | 'deep-learning'
//   | 'machine-learning'
//   // Open-source
//   | 'open-source-blogs'
//   | 'open-source-projects'
//   | 'open-source-tools'
//   // resources
//   | 'blogs'
//   | 'e-book'
//   | 'hosting'
//   | 'officialdocs'
//   | 'project-ideas'
//   // youtube
//   | 'android'
//   | 'competitive-programming'
//   | 'css'
//   | 'data-structures'
//   | 'fintech'
//   | 'game-development'
//   | 'machine-learning'
//   | 'tensorflow'
//   | 'testing'
//   | 'web-development'
//   | 'web3-metaverse'
//   // other
//   | 'communities'
//   | 'devtools'
//   | 'github'
//   | 'other-resources'
//   | 'podcasts'

export type SubCategories = {
  name: string
  url: string
  resources: IDBData[]
}

export interface ISidebar {
  category: Category
  subcategory: SubCategories[]
}

export interface SearchbarProps {
  setSearch: (search: string) => void
}

export interface IContext {
  sidebar: boolean
  openNav?: () => void
  closeNav?: () => void
  toggleNav?: () => void
}

export interface IUseFilterDBResponse {
  filterSubCat: IData[][]
  filterDB: IData[][]
}

export const subcategoryArray = [
  //frontend
  'accessibility',
  'animations',
  'colors',
  'design-inspiration',
  'fonts',
  'icons',
  'illustrations',
  'images',
  'online-code-editors',
  'react',
  'themes-templates',
  'ui-generators',
  'videos',
  //backend
  'architecture',
  'authentication',
  'caching',
  'database',
  'security',
  'system-design',
  'testing',
  'validation',
  // languages
  'c-programming',
  'csharp',
  'golang',
  'java',
  'javascript',
  'kotlin',
  'python',
  'ruby',
  'typescript',
  //artificial intelligence
  'artificial-intelligence',
  // machin learning
  'data-science',
  'deep-learning',
  'machine-learning',
  // Open-source
  'open-source-blogs',
  'open-source-projects',
  'open-source-tools',
  // resources
  'blogs',
  'e-book',
  'hosting',
  'officialdocs',
  'project-ideas',
  // youtube
  'android',
  'competitive-programming',
  'css',
  'data-structures',
  'fintech',
  'game-development',
  'machine-learning',
  'tensorflow',
  'testing',
  'web-development',
  'web3-metaverse',
  // other
  'communities',
  'devtools',
  'github',
  'other-resources',
  'podcasts',
]
