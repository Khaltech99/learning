export const validateMiddleware =
  (Schema, input = "body") =>
  (req, res, next) => {
    try {
      if (req[input] === null || req[input] === undefined) {
        return res
          .status(400)
          .json({ message: "Validation error: No input specified" });
      }

      Schema.parse(req[input]);
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Validation error",
        errors: error?.errors?.map((e) => e.message) ?? ["Invalid request"],
      });
    }
  };
