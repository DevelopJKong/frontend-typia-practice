export interface IMember {
  /**
   * @format email
   */
  email: string;

  /**
   * @exclusiveMinimum 19
   * @maximum 99
   */
  age: number;
}
