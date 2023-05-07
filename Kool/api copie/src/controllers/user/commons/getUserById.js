import HttpStatus from "http-status-codes";

export async function getUserById(req, res) {
  try {
    const userId = req.payload.uid;
    return res.status(HttpStatus.OK).json({
      userId,
    });
  } catch (error) {
    console.error(error);
  }
}
