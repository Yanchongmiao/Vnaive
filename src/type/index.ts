export interface Record<T = any> {
  [x: string]: T
}
export type Expand<T> = T extends infer o ? { [K in keyof o]: o[K] } : never
