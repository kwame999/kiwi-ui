export type ComponentTypes = {
  id: string
  componentType: string,
  description: string,
  category: string,
  meta?: {
    prop: string,
    type: string,
    defaults: string,
  }[],
  code?: string
  
}
