import SampleModel from "../models/SampleModel";

export default class SampleService {
  private test: number;

  public async ping(message = "pong"): Promise<SampleModel> {
    return { ping: message };
  }
}
