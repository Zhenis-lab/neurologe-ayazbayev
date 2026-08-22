const EMBEDDED_ASSETS = __EMBEDDED_ASSETS__;

function withTrailingSlash(request) {
  const url = new URL(request.url);
  if (url.pathname !== "/" && !url.pathname.endsWith("/") && !url.pathname.includes(".")) {
    url.pathname += "/";
    return Response.redirect(url.toString(), 308);
  }
  return null;
}

export default {
  async fetch(request) {
    const redirect = withTrailingSlash(request);
    if (redirect) return redirect;

    const url = new URL(request.url);
    const asset = EMBEDDED_ASSETS[url.pathname];
    const selected = asset || EMBEDDED_ASSETS["/404.html"];
    const bytes = Uint8Array.from(atob(selected.body), (character) => character.charCodeAt(0));
    const immutable = url.pathname.startsWith("/_next/static/");

    return new Response(request.method === "HEAD" ? null : bytes, {
      status: asset ? 200 : 404,
      headers: {
        "Content-Type": selected.type,
        "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "no-cache",
        "X-Content-Type-Options": "nosniff"
      }
    });
  }
};
