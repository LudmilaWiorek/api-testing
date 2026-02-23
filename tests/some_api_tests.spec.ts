import { APIRequestContext, expect, request, test } from "@playwright/test";

test.describe("Some API tests", () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: "https://reqres.in/api/",
      extraHTTPHeaders: {
        "x-api-key": process.env.API_KEY ?? "",
        "Content-Type": "application/json",
      },
    });
  });
  test("should return 200 for GET", async () => {
    const response = await apiContext.get("users");

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toBeInstanceOf(Array);
  });
  test("should return 201 for POST", async ({ request }) => {
    const response = await apiContext.post("users", {
      data: {
        name: "John",
        job: "developer",
      },
    });
    console.log("STATUS:", response.status());
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log("BODY odpowiedzi:", body);
  });
});
