import React from 'react';
import './Notes.css';

class Notes extends React.Component {
    render(){

        const notes = [
            {
                id:'2323',
                title:'Wykąpać psa',
                body:' pamiętaj aby wykąpac psa specjalnym szamponem'
            },
            {
                id:'2323',
                title:'Zrobić zakupy',
                body:'kupić mleko, masło, likier'
            }
        ]
        return(
            <div>
                <p>Moje notatki:</p>  
                <div className='note'>
                    <p>{notes[0].title+' '+notes[0].id}</p>
                    <div className='description'>
                    {notes[0].body}
                    </div>
                    <button>edytuj</button>
                    <button className='delete'>usuń</button>
                </div> 
                <div className='note'>
                    <p>{notes[1].title}</p>
                    <div className='description'>
                    {notes[1].body}
                    </div>
                    <button>edytuj</button>
                    <button className='delete'>usuń</button>
                </div>                 
            </div>
        )
    }

}

export default Notes;