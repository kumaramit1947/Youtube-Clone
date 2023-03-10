import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(searchTerm){
            navigate(`search/${searchTerm}`);
            setSearchTerm('');
        }
    }
    return (
        <Paper component='form'
            onSubmit={handleSubmit}
            sx={{
                boxShadow: 'none',
                pl: 2,
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                mr: { sm: 5 },
                height: 'fit-content',
                width: 'fit-content'

            }}>
            <input className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value) }} />
                <IconButton type='submit'
                sx={{
                    p: '10px',
                    color: 'red'
                }}>
                    <Search />

                </IconButton>
        </Paper>
    );
}
export default SearchBar;