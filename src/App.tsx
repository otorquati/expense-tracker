import { useState, useEffect } from 'react';
// Importa os estilos
import * as C from './App.styles';

// Importa os tipos das variaveis
import { Item } from './types/Item';
import { Category } from './types/Category';

//Importa os dados
import {items} from './data/items';
import {categories} from './data/categories';

// Importa as funções auxiliare
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'

// Importa os Componentes
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Finaceiro</C.HeaderText>
      </C.Header>
          <C.Body>
            { /* Área de Informações */}
            <InfoArea currentMonth={currentMonth}/>
            { /* Área de Inserção */}

            { /* Tabela de Itens */}
              <TableArea list={filteredList} />
          </C.Body>
    </C.Container>
  );
}

export default App;

