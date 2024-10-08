import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { ArrowIcon } from '~/assets/icons'
import { ButtonIcon } from '~/ui'
import { ICardFull } from '~/types/card'
import cn from 'classnames'
import styles from './Project.module.scss'

interface IProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const Project: FC<IProjectProps> = ({ ...props }) => {
  const data = useLocation().state as ICardFull
  const navigate = useNavigate()

  const onBackClick = () => {
    navigate('/items')
  }

  return (
    <div className={cn(styles.root)} {...props}>
      <div className={cn(styles.back)}>
        <div className={cn(styles.back_button)}>
          <ButtonIcon onClick={onBackClick} variant="medium">
            <ArrowIcon />
          </ButtonIcon>
        </div>
        <h2>Back to search...</h2>
      </div>
      <div className={cn(styles.container)}>
        <h2>Id {data.id}</h2>
        <div className={cn(styles.info)}>
          {Object.entries(data).map((item, index) => (
            <span key={index}>
              {(typeof item[1] === 'string' || typeof item[1] === 'number') && (
                <h4>
                  {item[0]}:{item[1]}
                </h4>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
