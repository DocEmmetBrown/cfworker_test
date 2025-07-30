export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World! v4 from Git, worker.js');
  }
};
