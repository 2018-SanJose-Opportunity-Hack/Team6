export const loadComponent = fn => {
 return ({ loading, error, data, client }) => {
   if (loading) return 'Loading';
   if (error) return 'error';
   return fn(data, client);
 };
};