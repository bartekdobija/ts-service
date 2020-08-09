import SampleModel from "../models/SampleModel";

export default class SampleService {
  private test: number;

  public async ping(message: string = "pong"): Promise<SampleModel> {
    return { ping: message };
  }
}
