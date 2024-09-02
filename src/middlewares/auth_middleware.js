// middleware/auth.js
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized." });
        }
        req.userId = decoded.id;
        next();
    });
};
