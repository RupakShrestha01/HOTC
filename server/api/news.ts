export default defineEventHandler((event) => {
  console.log('New request: ' + event.req.url)
})
// console.log('New request: ' + event.req.url)
// const { data: responce } = useFetch(`http://127.0.0.1:8000/news/`)
// const
// const query = useQuery(event)
// return {
//   api: 'works',
//   rec: query.param1,
// }
