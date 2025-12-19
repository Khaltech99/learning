// route protection middle ware
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const protectRouteMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    //   check if authHeader exists
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "You are not authorized to use this route" });
    }

    //   check token format
    const headerParts = authHeader.split(" ");
    if (headerParts.length !== 2 || headerParts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid token" });
    }

    const token = headerParts[1];

    //   verify the token using the jwt verify
    const decoded = jwt.verify(token, secret);

    req.user = {
      id: decoded.sub || decoded.id,
      email: decoded.email,
    };

    next();
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
};
