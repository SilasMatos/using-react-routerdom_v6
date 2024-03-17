import { useLocation } from 'react-router-dom'

export const About = () => {
  const { state } = useLocation()

  return (
    <>
      <p>About</p>
      <p>{state}</p>
    </>
  )
}
