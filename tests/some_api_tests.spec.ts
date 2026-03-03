import { expect, test } from "@playwright/test";

test.describe("Some API tests", () => {
  test("should return 200 for GET", async ({ request }) => {
    const response = await request.get("users");

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toBeInstanceOf(Array);
    expect(body.data[0]).toHaveProperty("id");
    expect(body.data[0]).toHaveProperty("email");
    expect(body.data[0]).toHaveProperty("first_name");
  });
  test("GET users with query params", async ({ request }) => {
    const response = await request.get("users?page=2&limit=5");

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    //parameter limit is ignored by API
  });
  test("GET non-existent user should return 404", async ({ request }) => {
    const response = await request.get("users/999999999");
    expect(response.status()).toBe(404);
  });
  test("should return 201 for POST", async ({ request }) => {
    const response = await request.post("users", {
      data: {
        name: "John",
        job: "developer",
      },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty("name", "John");
    expect(body).toHaveProperty("job", "developer");
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("createdAt");
  });
  test("should return 200 for PUT", async ({ request }) => {
    const response = await request.put("users/records/4", {
      data: {
        name: "Jane novak",
        email: "jane@example.com",
        role: "admin",
      },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("updatedAt");
  });
  test("should return 204 for DELETE", async ({ request }) => {
    const response = await request.delete("my-app/collections/todos/records");
    expect(response.status()).toBe(204);
    const body = await response.text();
    expect(body).toBe("");
  });
});
