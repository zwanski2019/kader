// worker.js
export default {
  fetch() {
    return new Response("Static site is served via /bucket", { status: 200 });
  }
}
