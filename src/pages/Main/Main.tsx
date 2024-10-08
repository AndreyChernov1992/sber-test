import { FC } from 'react'
import { Outlet } from 'react-router'
import { AsideDropdown, Pagination } from './components'
import cn from 'classnames'
import styles from './Main.module.scss'

const Main: FC = ({ ...props }) => {
  return (
    <div className={cn(styles.root)} {...props}>
      <AsideDropdown />

      <div className={cn(styles.wrapper)}>
        <Outlet />
        <Pagination />
      </div>
    </div>
  )
}

export default Main
