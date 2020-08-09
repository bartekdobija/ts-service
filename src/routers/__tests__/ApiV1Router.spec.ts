import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe("API endpoint", () => {
  it ("provides pinging endpoint (/api/v1/ping)", async done => {

    const res = await request.get("/api/v1/ping");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");

    done();
  });

});
