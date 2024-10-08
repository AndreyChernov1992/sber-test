import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICardShort } from '~/types/card'
import { StarIcon } from '~/assets/icons'
import cn from 'classnames'
import styles from './Card.module.scss'

interface ICardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardData: ICardShort
}

const Card: FC<ICardProps> = ({ cardData, ...props }) => {
  return (
    <div className={cn(styles.root)} {...props}>
      <div className={cn(styles.header)}>
        <img width={30} height={30} src={cardData.avatar_url} alt="avatar" />
        {cardData.owner && (
          <h4>{cardData.name}</h4>
        )}
      </div>
      <div className={cn(styles.body)}>
        <StarIcon />
        <h3>{cardData.stargazers_count}</h3>
      </div>
    </div>
  )
}

export default Card
