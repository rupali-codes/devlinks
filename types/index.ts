export type DataList = {
  name: string;
  description: string;
  url: string;
};

export interface ICollapsProps {
  title: string;
  elements: DataList[];
}

export interface IData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  subcategory: SubCategory;
}

export type Category = "frontend" | "backend";

export type SubCategory = "images" | "illustrations" | "colors" | "fonts";

export interface ISidebar {
  category: Category;
  subcategory: Array<string>;
}
