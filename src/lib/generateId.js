import crypto from 'crypto';

const generateId = (name) => crypto.createHash('sha1').update(name).digest('hex');

export default generateId;
