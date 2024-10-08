import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from "react"
import { ButtonIcon } from '~/ui'
import { ArrowIcon } from '~/assets/icons'
import cn from 'classnames'
import styles from "./Pagination.module.scss"
import useSearchParamsStore from "~/store/searchParamsStore/searchParams"

interface IPaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
  }

const Pagination: FC<IPaginationProps> = ({ ...props }): ReactElement => {
	const {page, setPage} = useSearchParamsStore()

	const onIncrementButtonClick = () => {
    setPage(page + 1)
  }

  const onDecrementButtonClick = () => {
    setPage(page - 1)
  }

	return (
    <div className={cn(styles.root)} {...props}>
      {page > 1 && (
        <div className={cn(styles.decrement_button)}>
          <ButtonIcon onClick={onDecrementButtonClick} variant="medium">
            <ArrowIcon />
          </ButtonIcon>
        </div>
      )}
      <div className={cn(styles.increment_button)}>
        <ButtonIcon onClick={onIncrementButtonClick} variant="medium">
          <ArrowIcon />
        </ButtonIcon>
      </div>
    </div>
  )
};

export default Pagination


