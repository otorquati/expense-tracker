import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { UInumbers} from '../../components/UInumbers'

type Props = {
  item: Item
}
export const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>  
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value>
          <UInumbers format='0.00' children={item.value} color={categories[item.category].expense ? 'red' : 'green'}/>
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
}