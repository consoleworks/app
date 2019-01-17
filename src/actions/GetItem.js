export const getItem = ({ id, tableName }) => {
    console.log("Retrieving Item " + id + " from table " + tableName);
    return { id };
}
