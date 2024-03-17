import { Outlet, useParams } from 'react-router-dom'

export const Post = () => {
  const params = useParams()
  console.log(params)

  return (
    <>
      <div>POST</div>
      <Outlet />
    </>
  )
}
