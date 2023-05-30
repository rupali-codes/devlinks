import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'

export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat) => ({ ...subcat, id: uuidv4() }))
)
export const sidebarData: ISidebar[] = [
  {
    category: 'frontend',
    subcategory: [
      { name: 'react js', url: '/react' },
      { name: 'images', url: '/images' },
      { name: 'fonts', url: '/fonts' },
      { name: 'colors', url: '/colors' },
      { name: 'illustrations', url: '/illustrations' },
      { name: 'animations', url: '/animations' },
      { name: 'icons', url: '/icons' },
      { name: 'design inspiration', url: '/design-inspiration' },
      { name: 'themes & templates', url: '/themes-templates' },
      { name: 'UI Generators', url: '/ui-generator' },
      { name: 'online code editors', url: '/online-code-editors' },
    ],
  },
  {
    category: 'backend',
    subcategory: [
      { name: 'architecture', url: '/architecture' },
      { name: 'validation', url: '/validation' },
      { name: 'security', url: '/security' },
      { name: 'authentication', url: '/authentication' },
      { name: 'caching', url: '/caching' },
      { name: 'testing', url: '/testing' },
      { name: 'system design', url: '/system-design' },
      { name: 'database', url: '/database' },
    ],
  },
  {
    category: 'languages',
    subcategory: [
      { name: 'JavaScript', url: '/javascript' },
      { name: 'Python', url: '/python' },
      { name: 'Csharp (C#)', url: '/csharp' },
      { name: 'Go', url: '/golang' },
      { name: 'TypeScript', url: '/typescript' },
    ],
  },
  {
    category: 'ml & ai',
    subcategory: [
      { name: 'machine learning', url: '/ml' },
      { name: 'data science', url: '/data-science' },
      { name: 'deep learning', url: '/deep-learning' },
    ],
  },
  {
    category: 'open source',
    subcategory: [
      { name: 'Blogs', url: '/open-source-blogs' },
      { name: 'Projects', url: '/open-source-projects' },
      { name: 'Tools', url: '/open-source-tools' },
    ],
  },
  {
    category: 'resources',
    subcategory: [
      { name: 'blogs', url: '/blogs' },
      { name: 'hosting', url: '/hosting' },
      { name: 'e-book', url: '/e-book' },
      { name: 'project ideas', url: '/project-ideas' },
    ],
  },
  {
    category: 'youtube',
    subcategory: [
      { name: 'web development', url: '/web-development' },
      { name: 'CSS', url: '/css' },
      { name: 'machine learning', url: '/machine-learning' },
      { name: 'tensorflow', url: '/tensorflow' },
      { name: 'data structures', url: '/dsa' },
      { name: 'Android', url: '/android' },
      { name: 'Web3 & Metaverse', url: '/web3-metaverse' },
      { name: 'Testing', url: '/testing' },
      { name: 'Computer Science', url: '/computer-science' },
      { name: 'Competitive Programming', url: '/competitive-programming' },
    ],
  },
  {
    category: 'resources',
    subcategory: [
      { name: 'blogs', url: '/blogs' },
      { name: 'hosting', url: '/hosting' },
      { name: 'Official Docs', url: '/officialdocs' },
      { name: 'e-book', url: '/e-book' },
    ],
  },
  {
    category: 'languages',
    subcategory: [
      { name: 'JavaScript', url: '/javascript' },
      { name: 'Python', url: '/python' },
      { name: 'Go', url: '/golang' },
      { name: 'Csharp (C#)', url: '/csharp' },
    ],
  },
  {
    category: 'other',
    subcategory: [
      { name: 'Github', url: '/github' },
      { name: 'Dev Tools', url: '/devtools' },
      { name: 'Podcasts', url: '/podcasts' },
      { name: 'Other Resources', url: '/other-resources' },
    ],
  },
]
