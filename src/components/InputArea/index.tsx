import * as C from './styles';
import { useState } from 'react';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea =({onAdd}: Props) => {
  // Definir os estados dos campos
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
 
  // definir as chaves de indexação das categorias
    const categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
      const errors: string[] = [];
  
      if(isNaN(new Date(dateField).getTime())) {
        errors.push('Data inválida!');
      }
      if(!categoryKeys.includes(categoryField)) {
        errors.push('Categoria inválida!');
      }
      if(titleField === '') {
        errors.push('Título vazio!');
      }
      if(valueField <= 0) {
        errors.push('Valor inválido!');
      }
  
      if(errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        onAdd({
          date: newDateAdjusted(dateField),
          category: categoryField,
          title: titleField,
          value: valueField
        });
        clearFields();
      }
    }
  
  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }
  
  return(
  <C.Container>
    {/* Definir os rótulos dos campos */}
    <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
    </C.InputLabel>
    {/* Fazer um select para atribuição da categoria*/}
    <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
    <C.InputLabel>
      <C.InputTitle>Titulo</C.InputTitle>
      <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
    </C.InputLabel>
    <C.InputLabel>
      <C.InputTitle>Valor</C.InputTitle>
      <C.Input type="number" value={valueField} onChange={e => setValueField(e.target.value)} />
    </C.InputLabel>
    <C.InputLabel>
      <C.InputTitle>&nbsp;</C.InputTitle>
      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
    </C.InputLabel>
  </C.Container>
  );
}
