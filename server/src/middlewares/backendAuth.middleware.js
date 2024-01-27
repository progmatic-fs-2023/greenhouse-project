import jwt from 'jsonwebtoken';

const backendAuth = async (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization.split(' ').length !== 2) {
    return next();
  }

  const token = req.headers.authorization.split(' ')[1];
  const paramId = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === 'admin' || decoded.id === paramId) {
      return next();
    } else {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

export default backendAuth;
