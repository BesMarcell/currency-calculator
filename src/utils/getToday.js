const getToday = () => new Date().toISOString().substring(0, 10);

export default getToday;
