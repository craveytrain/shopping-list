import * as crypto from 'crypto';

const generateId = (name: string): string => crypto.createHash('sha1').update(name).digest('hex');

export default generateId;
