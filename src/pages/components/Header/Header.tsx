import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Header.module.scss'
import logo from '../../../assets/img/logo.png'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  name?: string
}

const Header: FC<IHeaderProps> = ({ ...props }) => {
  return (
    <header className={cn(styles.root)} {...props}>
      <img className={cn(styles.img)} src={logo} alt="logo" />
      <h1 className={cn(styles.git)}>GitHub</h1>
      <h1 className={cn(styles.search)}>Search</h1>
    </header>
  )
}

export default Header
