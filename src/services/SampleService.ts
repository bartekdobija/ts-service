import SampleModel = require("../models/SampleModel")

class SampleService {
  private test: number

  get(id: number): SampleModel {
    return new SampleModel()
  }
}

export = SampleService