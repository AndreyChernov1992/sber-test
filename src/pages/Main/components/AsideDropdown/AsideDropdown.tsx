import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { IDropdownItem } from '~/types/dropdown';
import { Dropdown } from '~/components';
import { languagesItems } from './languagesItems';
import useSearchParamsStore from '~/store/searchParamsStore/searchParams';

interface IAsideDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string;
}

const AsideDropdown: FC<IAsideDropdownProps> = ({ ...props }): ReactElement => {
  const { language, setLanguage, setPage } = useSearchParamsStore();

  const onDropdownItemClick = (value: IDropdownItem) => {
    setLanguage(value.title);
    setPage(1);
  };

  return (
    <>
      <Dropdown
        activeItem={language}
        values={languagesItems}
        onValueChange={onDropdownItemClick}
        {...props}
      />
    </>
  );
};

export default AsideDropdown;
