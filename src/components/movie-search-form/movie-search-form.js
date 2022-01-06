import React, { useState } from 'react';
import { PLOT_TYPES } from '../../constants/constants';
import {
    SearchInput,
    FormWrapper,
    RadioLabelWrapper,
    SubmitButton,
    RadioLabel,
} from './parts';

export const MovieSearchForm = ({
    onSearchResultHandler,
    isLoading,
}) => {
    const [title, setTitle] = useState('');
    const [plot, setPlot] = useState(PLOT_TYPES.SHORT);
    const onSearchClickHandler = async (e) => {
        e.preventDefault();
        onSearchResultHandler({ title, plot });
    };
    return (
        <FormWrapper onSubmit={onSearchClickHandler}>
            <SearchInput name="search"
                         type="search"
                         value={title}
                         onChange={e => setTitle(e.target.value)} />
            <RadioLabelWrapper>
                {Object.values(PLOT_TYPES).map((type) => (
                    <RadioLabel key={type}>
                        <input type="radio" value={type} name="plot" onChange={e => setPlot(e.target.value)} checked={plot===type}/>
                        {type}
                    </RadioLabel>
                ))}
            </RadioLabelWrapper>
            <SubmitButton type="submit" disabled={!title || isLoading}>{isLoading ? 'Loading...' : 'Get results'}</SubmitButton>
        </FormWrapper>
    );
}

