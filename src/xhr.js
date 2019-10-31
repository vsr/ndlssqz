export const sendRequest = (url, callback, postData) => {
  var req = new XMLHttpRequest();
  if (!req) return;
  var method = postData ? "POST" : "GET";
  req.open(method, url, true);
  if (postData)
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.onreadystatechange = function() {
    if (req.readyState != 4) return;
    if (req.status != 200 && req.status != 304) {
      return callback(true);
    }
    callback(null, req);
  };
  if (req.readyState == 4) return;
  req.send(postData);
};
