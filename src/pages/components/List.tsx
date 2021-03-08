import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import 'bulma/css/bulma.css'
const List = ({ onNext, onPrev, onFilter, onReset, textFilter, users }: any) => {


    const [valueInput, setValueInput] = React.useState("")
    let initId = "";
    const itemsList = users && users.map((item: any, index: number) => {
        if (index === users.length - 1) {
            initId = item.id;
        }
        return (
            <div key={index}>
                <CardItem user={item} />
            </div>)
    })

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onFilter(event.currentTarget.value);
        }
    }

    const resetInput = () => {
        setValueInput("")
        onReset()
    }
    return (
        <article className="panel is-info">
            <p className="panel-heading">
                Git Hub Users List
             </p>
            <nav className="pagination is-left p-3" role="navigation" aria-label="pagination">
                <a className="pagination-previous" onClick={() => onPrev(initId)} >Previous</a>
                <a className="pagination-next" onClick={() => onNext(initId)}>Next page</a>
                <a className="button is-light" onClick={resetInput}>Reset Filter</a>
                <ul className="pagination-list">
                </ul>
            </nav>
            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-info" type="text" value={valueInput} onChange={e => setValueInput(e.currentTarget.value)} placeholder={textFilter} onKeyDown={handleKeyDown} />
                    <span className="icon is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>

            {itemsList}

        </article>


    );
};

List.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    textFilter: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
};

export default List;