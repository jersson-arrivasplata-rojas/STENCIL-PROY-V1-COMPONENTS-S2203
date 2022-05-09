export interface IHyperLink {
  id?:string;
  url: string;
  text: string;
  padding: string;
  target: string;
  active: boolean;
  fnClick?: () => void;
}
