export default class Response {

  public static success(data: any) {
    return new Response(data);
  }

  public static failure(ex: any) {
    return new Response(ex);
  }

  private response: any;

  constructor(data: any) {
    this.response = data;
  }
}
