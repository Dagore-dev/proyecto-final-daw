import { Link } from 'react-router-dom'

interface Props {
  classes?: string
}
export default function Links (props: Props): JSX.Element {
  const { classes } = props

  return (
    <>
      <li>
        <Link to='/contact' className={classes}>Contacto</Link>
      </li>
    </>
  )
}
