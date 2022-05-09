export interface IListGroup {
  identify?:string;
  url: string;
  text: string;
  padding: string;
  target: string;
  fnClick?: () => void;
}
