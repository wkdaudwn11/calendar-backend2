export const getHome = async (req, res) => {
  res.send({
    success: true,
    message: null,
    data: process.env.NODE_ENV,
  });
};
