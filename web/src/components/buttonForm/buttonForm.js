import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as C from "./style";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 15,
  p: 4,
};

export default function BasicModal() {
  const [categoria, setCategoria] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <C.Button>
        <Button onClick={handleOpen}>Novo registro</Button>
      </C.Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Novo Registro
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            Nome
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            Valor
            <TextField id="filled-basic" label="Valor" variant="outlined" />
            Categoria
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={categoria}
                onChange={handleChange}
                autoWidth
                label="type"
              >
                <MenuItem value="">
                  <em>Comida</em>
                </MenuItem>
                <MenuItem value>Farmácia</MenuItem>
                <MenuItem value>Roupas</MenuItem>
                <MenuItem value>Lazer</MenuItem>
              </Select>
            </FormControl>
            Local -
            add o map aqui
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
