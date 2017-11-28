const generateId = (name: string) => (
  name.toLowerCase().replace(/\s+/g, '-')
);

export default generateId;
