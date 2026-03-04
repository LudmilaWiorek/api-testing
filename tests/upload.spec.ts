import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

test.describe("Parrot tests", () => {
  test.use({
    baseURL: "https://httpbin.org/",
  });
  test("check for GET", async ({ request }) => {
    const response = await request.get("/get");
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json).toHaveProperty("url", "https://httpbin.org/get");
  });
  test("check for POST", async ({ request }) => {
    const response = await request.post("/post", {
      data: { imie: "Marek" },
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.json).toEqual({ imie: "Marek" });
  });
  test("upload parrot", async ({ request }) => {
    const filePath = path.join(__dirname, "fixtures", "partyparrot.gif");
    const response = await request.post("/post", {
      multipart: {
        file: {
          name: "partyparrot.gif",
          mimeType: "image/gif",
          buffer: fs.readFileSync(filePath),
        },
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("files");
  });
});
test("inny test", async ({ page }) => {
  await page.goto("/");
});
