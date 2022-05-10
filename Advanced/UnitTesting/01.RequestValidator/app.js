function solve(args) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const uris = new RegExp(/^[\w.]+$/gm.test(args.uri));
  const version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messages = new RegExp(/^[^<>\\&'"]*$/gm.test(args.message));

  if (!methods.includes(args.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!version.includes(args.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (uris == false) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (messages == false) {
    throw new Error("Invalid request header: Invalid Message");
  }
  console.log(args);
}

solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }
  );
