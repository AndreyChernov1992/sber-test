import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useNavigate } from 'react-router'
import { ICardFull } from '~/types/card'
import { Card } from '~/components'
import { Spiner } from '~/ui'
import cn from 'classnames'
import styles from './CardContainer.module.scss'
import { useGetCards } from '~/hooks/useGetCards'
import { normalizeCardData } from '~/utils/normalizeCardShortData'

interface ICardContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const CardContainer: FC<ICardContainerProps> = ({ ...props }) => {
  const { data, isFetching } = useGetCards()
  const navigate = useNavigate()

  const onCardClick = (index: number, id: string | number) => () => {
    navigate(`/project/${id}`, { state: data?.items[index] as ICardFull })
  }

  return (
    <div className={cn(styles.root)} {...props}>
      {isFetching && <Spiner />}
      <div className={cn(styles.container)}>
        {data ? (
          data.items.map((item, index) => (
            <Card
              onClick={onCardClick(index, item.id)}
              cardData={normalizeCardData(item)}
              key={item.id}
            />
          ))
        ) : (
          <h2>Error</h2>
        )}
      </div>
    </div>
  )
}

export default CardContainer
