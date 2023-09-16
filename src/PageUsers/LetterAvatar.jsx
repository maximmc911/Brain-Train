import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, green, orange, blue, teal } from '@mui/material/colors';

export default function LetterAvatars({name}) {

  let letter = name[0];
  let color =``;
  const l1= [`А`,`Б`,`В`,`Г`,`Д`,];
  const l2= [`З`,`И`,`Й`,`К`,];
  const l3 = [`О`,`П`,`Р`,`С`,`Т`,`У`,];
  const l4 = [`Ф`,`Х`,`Ц`,`Ч`,`Ш`,];
  const l5 = [`Щ`,`Ы`,`Э`,`Ю`,`Я`,];
  const l6 = [`Е`,`Ё`,`Ж`,`Л`,`М`,`Н`,];
  for (let index = 0; index < l1.length; index++) {
    if (letter == l1[index]) {
      color = deepPurple[700]
    }
    
  }
  for (let index = 0; index < l2.length; index++) {
    if (letter == l2[index]) {
      color = deepOrange[500]
    }
    
  }
  for (let index = 0; index < l3.length; index++) {
    if (letter == l3[index]) {
      color = green[500]
    }
    
  }
  for (let index = 0; index < l4.length; index++) {
    if (letter == l4[index]) {
      color = orange[500]
    }
    
  }
  for (let index = 0; index < l5.length; index++) {
    if (letter == l5[index]) {
      color = blue[500]
    }
    
  }
  for (let index = 0; index < l6.length; index++) {
    if (letter == l6[index]) {
      color = teal[500]
    }
    
  }
 
  /*АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ */
  /*
  orange
  */
  return (
    <Stack direction="row" spacing={5}>
      
      <Avatar sx={{ bgcolor: color , padding:`35px`, fontSize: `30px`  }}>{letter}</Avatar>
      
    </Stack>
  );
}