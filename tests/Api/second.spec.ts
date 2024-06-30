import { test, expect } from "@playwright/test";
import exp from "constants";

test.describe.parallel("Api Testing", () => {
  const baseUrl = "https://reqres.in/api";

  test("list resource", async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
  test("single resource", async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown/2`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
  test("parsing body", async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown/2`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(responseBody.data.nmae).toEqual(undefined);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.year).toBe(2001);
    expect(responseBody.data.color).toBe("#C74375");
    expect(responseBody.support.url).toEqual("https://reqres.in/#support-heading");
    expect(responseBody.support.text).toEqual("To keep ReqRes free, contributions towards server costs are appreciated!");
  });
  test("not found", async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown/32`);
    expect(response.status()).toBe(404);
  });
  test("register", async ({ request }) => {
    const response = await request.post(`${baseUrl}/register`, {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    });
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.id).toBe(4);
    expect(responseBody.token).toBeTruthy();
  });
});
