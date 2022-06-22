export default defineEventHandler((event) => {
 const query = useQuery(event);
 return {
   api:"work",
   rec : query.page
 }
})
