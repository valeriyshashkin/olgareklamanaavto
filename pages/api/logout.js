import cookies from "../../utils/cookies";

async function handler(req, res) {
  res.cookie("auth", "", { maxAge: 0 });
  res.end();
}

export default cookies(handler);
